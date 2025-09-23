import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './NoticiaPage.module.css';
import API_BASE_URL from '../config'; // Importa la URL base

function NoticiaPage() {
  const { slug } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/noticias/${slug}`);
        setNoticia(response.data);
      } catch (err) {
        setError('No se pudo cargar la noticia. Inténtalo de nuevo más tarde.');
        console.error("Error al obtener la noticia:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNoticia();
  }, [slug]);

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  if (loading) {
    return <div className="App-container"><h1 className={styles.pageTitle}>Cargando...</h1></div>;
  }
  if (error) {
    return <div className="App-container"><h1 className={styles.pageTitle}>{error}</h1></div>;
  }
  if (!noticia) {
    return <div className="App-container"><h1 className={styles.pageTitle}>Noticia no encontrada.</h1></div>;
  }

  return (
    <div className={`App-container ${styles.noticiaDetalle}`}>
      <Link to="/" className={styles.backLink}>← Volver a Inicio</Link>
      
      <h1 className={styles.noticiaDetalleTitulo}>{noticia.titulo}</h1>
      <p className={styles.noticiaDetalleCategoria}>
        {noticia.categoria}
        {noticia.createdAt && ( // Muestra la fecha solo si existe
          <> - <strong>{formatDate(noticia.createdAt)}</strong></>
        )}
      </p>
      
      <img src={noticia.imagenUrl} alt={noticia.titulo} className={styles.noticiaDetalleImagen} />
      
      <div 
        className={styles.noticiaDetalleContenido}
        dangerouslySetInnerHTML={{ __html: noticia.contenido }}
      />
    </div>
  );
}

export default NoticiaPage;