import React from 'react';
import styles from './ArticleCard.module.css';

function ArticleCard({ noticia }) {
  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <article className={styles.articleCard}>
      <div className={styles.articleImageContainer}>
        <img src={noticia.imagenUrl} alt={noticia.titulo} className={styles.articleImage} />
      </div>
      <div className={styles.articleContent}>
        <span className={styles.articleCategory}>{noticia.categoria}</span>
        <h3 className={styles.articleTitle}><strong>{noticia.titulo}</strong></h3> {/* Título en negrita */}
        {noticia.createdAt && ( // Solo muestra la fecha si existe en el objeto noticia
          <p className={styles.articleDate}>
            <strong>{formatDate(noticia.createdAt)}</strong> {/* Fecha en negrita */}
          </p>
        )}
        <p className={styles.articleSummary}>
          <strong>{noticia.resumen}</strong> {/* Resumen en negrita */}
        </p>
      </div>
    </article>
  );
}

export default ArticleCard;