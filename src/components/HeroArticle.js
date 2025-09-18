  // en frontend/src/components/HeroArticle.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    
    // Importamos los estilos como módulo
    import styles from './HeroArticle.module.css';

    function HeroArticle({ noticia }) {
      if (!noticia) {
        return null; // O podrías mostrar un esqueleto de carga aquí
      }

      // Creamos un objeto de estilo para la imagen de fondo
      const backgroundStyle = {
        backgroundImage: `url(${noticia.imagenUrl})`
      };

      return (
        <Link to={`/noticia/${noticia.slug}`} className={styles.heroLink}>
          <section className={styles.heroArticle} style={backgroundStyle}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>{noticia.categoria}</span>
              <h1 className={styles.heroTitle}>{noticia.titulo}</h1>
            </div>
          </section>
        </Link>
      );
    }

    export default HeroArticle;