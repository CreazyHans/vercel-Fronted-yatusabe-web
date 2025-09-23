import React from 'react';
import styles from './ArticleCard.module.css';

function ArticleCard({ noticia }) {
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
        {/* Usamos un div para la categoría y la ponemos en strong */}
        <div className={styles.articleCategory}><strong>{noticia.categoria}</strong></div> 
        
        <h3 className={styles.articleTitle}><strong>{noticia.titulo}</strong></h3>
        
        {noticia.createdAt && (
          <p className={styles.articleDate}>
            <strong>{formatDate(noticia.createdAt)}</strong>
          </p>
        )}
        
        {/* CLAVE: Usamos dangerouslySetInnerHTML para el resumen */}
        <div 
          className={styles.articleSummary}
          dangerouslySetInnerHTML={{ __html: noticia.resumen }}
        />
      </div>
    </article>
  );
}

export default ArticleCard;