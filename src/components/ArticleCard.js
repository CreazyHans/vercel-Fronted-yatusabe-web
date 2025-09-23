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
        <span className={styles.articleCategory}><strong>{noticia.categoria}</strong></span>
        <h3 className={styles.articleTitle}><strong>{noticia.titulo}</strong></h3>
        {noticia.createdAt && ( // Solo muestra la fecha si existe
          <p className={styles.articleDate}>
            <strong>{formatDate(noticia.createdAt)}</strong>
          </p>
        )}
        {/*
          ¡HE ELIMINADO COMPLETAMENTE EL CÓDIGO QUE MOSTRABA EL RESUMEN!
          El div con className={styles.articleSummary} y dangerouslySetInnerHTML ya no está aquí.
        */}
      </div>
    </article>
  );
}

export default ArticleCard;