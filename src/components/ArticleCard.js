 // en frontend/src/components/ArticleCard.js
    import React from 'react';
    
    // Importamos los estilos como módulo
    import styles from './ArticleCard.module.css';

    function ArticleCard({ noticia }) {
      return (
        <article className={styles.articleCard}>
          <div className={styles.articleImageContainer}>
            <img src={noticia.imagenUrl} alt={noticia.titulo} className={styles.articleImage} />
          </div>
          <div className={styles.articleContent}>
            <span className={styles.articleCategory}>{noticia.categoria}</span>
            <h3 className={styles.articleTitle}>{noticia.titulo}</h3>
          </div>
        </article>
      );
    }

    export default ArticleCard;