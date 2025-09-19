import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './NoticiaPage.module.css'; // Importamos los estilos modulares

function NoticiaPage() {
  const { slug } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Definimos la función para buscar la noticia
    const fetchNoticia = async () => {
      setLoading(true); // Ponemos en modo carga
      try {
        // const response = await axios.get(`/api/noticias/${slug}`); // ANTES
const response = await axios.get(`${API_BASE_URL}/api/noticias/${slug}`); // DESPUÉS
        setNoticia(response.data); // Guardamos la noticia encontrada
      } catch (err) {
        setError('No se pudo cargar la noticia. Inténtalo de nuevo más tarde.');
        console.error("Error al obtener la noticia:", err);
      } finally {
        setLoading(false); // La carga ha terminado
      }
    };

    // Llamamos a la función
    fetchNoticia();
  }, [slug]); // Se ejecuta cada vez que el 'slug' en la URL cambie

  // --- Vistas condicionales ---
  if (loading) {
    return <div className="App-container"><h1 className={styles.pageTitle}>Cargando...</h1></div>;
  }

  if (error) {
    return <div className="App-container"><h1 className={styles.pageTitle}>{error}</h1></div>;
  }

  if (!noticia) {
    return <div className="App-container"><h1 className={styles.pageTitle}>Noticia no encontrada.</h1></div>;
  }

  // --- Vista Principal ---
  return (
    <div className={`App-container ${styles.noticiaDetalle}`}>
      <Link to="/" className={styles.backLink}>← Volver a Inicio</Link>
      
      <h1 className={styles.noticiaDetalleTitulo}>{noticia.titulo}</h1>
      <p className={styles.noticiaDetalleCategoria}>{noticia.categoria}</p>
      
      <img src={noticia.imagenUrl} alt={noticia.titulo} className={styles.noticiaDetalleImagen} />
      
      <div 
        className={styles.noticiaDetalleContenido}
        dangerouslySetInnerHTML={{ __html: noticia.contenido }}
      />
    </div>
  );
}

export default NoticiaPage;