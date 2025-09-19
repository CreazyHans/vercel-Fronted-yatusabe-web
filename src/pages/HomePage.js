import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import HeroArticle from '../components/HeroArticle';
import styles from './HomePage.module.css';

const API_BASE_URL = 'https://vercel-bakend-yatusabe-web.vercel.app';


function HomePage() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  // frontend/src/pages/HomePage.js

// ... (importaciones y API_BASE_URL definida) ...

useEffect(() => {
  const fetchNoticias = async () => {
    setLoading(true);
    try {
      // <<< ¡CORRECCIÓN CLAVE AQUÍ!
      const response = await axios.get(`${API_BASE_URL}/api/noticias`);
      setNoticias(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Hubo un error al obtener las noticias:", error);
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  };
  fetchNoticias();
}, []);

// ... (resto del código) ...

  const featuredArticle = noticias[0];
  const otherArticles = noticias.slice(1);

  if (loading) {
    return (
      <main className="App-container">
        <h1 className={styles.pageTitle}>Cargando Noticias...</h1>
      </main>
    );
  }

  return (
    <main className="App-container">
      <HeroArticle noticia={featuredArticle} />
      <section className={styles.seoBlock}>
        <h2>Tu Portal de Noticias en República Dominicana</h2>
        <p>En <strong>Ya Tu Sabe TV RD</strong>, te traemos las últimas noticias de la <strong>República Dominicana</strong> con el lenguaje del pueblo...</p>
      </section>
      {otherArticles.length > 0 && <h1 className={styles.pageTitle}>Más Noticias</h1>}
      <div className={styles.noticiasContainer}>
        {otherArticles.map((noticia) => (
          <Link to={`/noticia/${noticia.slug}`} key={noticia._id} className={styles.articleLink}>
            <ArticleCard noticia={noticia} />
          </Link>
        ))}
      </div>
      <section className={styles.seoBlock}>
        <h2>Farándula, Chisme y Más - ¡Ya Tu Sabe!</h2>
        <p>Navega por nuestras categorías y descubre todo sobre tus artistas favoritos...</p>
      </section>
    </main>
  );
}

export default HomePage;