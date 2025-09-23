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
        <span className={styles.articleCategory}><strong>{noticia.categoria}</strong></span> {/* Categoría en negrita */}
        <h3 className={styles.articleTitle}><strong>{noticia.titulo}</strong></h3> {/* Título en negrita */}
        {noticia.createdAt && ( // Solo muestra la fecha si existe
          <p className={styles.articleDate}>
            <strong>{formatDate(noticia.createdAt)}</strong> {/* Fecha en negrita */}
          </p>
        )}
        {/* CORRECCIÓN CLAVE: Usar dangerouslySetInnerHTML para el resumen */}
        <div 
          className={styles.articleSummary}
          dangerouslySetInnerHTML={{ __html: noticia.resumen }}
        />
      </div>
    </article>
  );
}

export default ArticleCard;