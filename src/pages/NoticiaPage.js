import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './NoticiaPage.module.css';
import API_BASE_URL from '../config'; // Importa la URL base
import ArticleCard from '../components/ArticleCard'; // Necesitas ArticleCard para las noticias relacionadas

function NoticiaPage() {
  const { slug } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [noticiasRelacionadas, setNoticiasRelacionadas] = useState([]); // Nuevo estado para relacionadas
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticiaYRelacionadas = async () => {
      setLoading(true);
      try {
        // 1. Obtener la noticia principal
        const responseNoticia = await axios.get(`${API_BASE_URL}/api/noticias/${slug}`);
        setNoticia(responseNoticia.data);

        // 2. Obtener noticias relacionadas de la misma categoría
        if (responseNoticia.data && responseNoticia.data.categoria) {
          const categoria = responseNoticia.data.categoria;
          // Obtener 4 noticias de la misma categoría, excluyendo la actual
          const responseRelacionadas = await axios.get(
            `${API_BASE_URL}/api/noticias/categoria/${categoria}?excludeSlug=${slug}&limit=4`
          );
          setNoticiasRelacionadas(responseRelacionadas.data);
        }

      } catch (err) {
        setError('No se pudo cargar la noticia o sus relacionadas. Inténtalo de nuevo más tarde.');
        console.error("Error al obtener la noticia o relacionadas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticiaYRelacionadas();
  }, [slug]); // Se ejecuta cada vez que el 'slug' en la URL cambie

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // --- Vistas condicionales ---
  if (loading) {
    return <div className="App-container"><h1 className={styles.pageTitle}><strong>Cargando Noticia...</strong></h1></div>;
  }

  if (error) {
    return <div className="App-container"><h1 className={styles.pageTitle}><strong>{error}</strong></h1></div>;
  }

  if (!noticia) {
    return <div className="App-container"><h1 className={styles.pageTitle}><strong>Noticia no encontrada.</strong></h1></div>;
  }

  // --- Vista Principal ---
  return (
    <div className={`App-container ${styles.noticiaDetalle}`}>
      <Link to="/" className={styles.backLink}>← <strong>Volver a Inicio</strong></Link>
      
      <h1 className={styles.noticiaDetalleTitulo}><strong>{noticia.titulo}</strong></h1>
      <p className={styles.noticiaDetalleMeta}>
        <strong>Categoría:</strong> {noticia.categoria}
        {noticia.createdAt && (
          <> - <strong>Fecha: {formatDate(noticia.createdAt)}</strong></>
        )}
      </p>
      
      <img src={noticia.imagenUrl} alt={noticia.titulo} className={styles.noticiaDetalleImagen} />
      
      <div 
        className={styles.noticiaDetalleContenido}
        dangerouslySetInnerHTML={{ __html: noticia.contenido }}
      />

      {/* SECCIÓN DE NOTICIAS RELACIONADAS */}
      {noticiasRelacionadas.length > 0 && (
        <section className={styles.relatedNoticiasSection}>
          <h2 className={styles.relatedNoticiasTitle}><strong>Más Noticias de {noticia.categoria}</strong></h2>
          <div className={styles.noticiasContainer}> {/* Puedes usar un estilo similar al de HomePage */}
            {noticiasRelacionadas.map((relacionada) => (
              <Link to={`/noticia/${relacionada.slug}`} key={relacionada._id} className={styles.articleLink}>
                <ArticleCard noticia={relacionada} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default NoticiaPage;