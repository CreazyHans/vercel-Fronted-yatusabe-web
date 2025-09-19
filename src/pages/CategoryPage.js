import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import styles from './CategoryPage.module.css';

const API_BASE_URL = 'https://vercel-bakend-yatusabe-web.vercel.app';


function CategoryPage() {
  const { categoryName } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticiasPorCategoria = async () => {
      setLoading(true);
      try {
        // const response = await axios.get(`/api/noticias/categoria/${categoryName}`); // ANTES
const response = await axios.get(`${API_BASE_URL}/api/noticias/categoria/${categoryName}`); // DESPUÉS
        setNoticias(response.data);
      } catch (error) {
        console.error(`Error obteniendo noticias para la categoría ${categoryName}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchNoticiasPorCategoria();
  }, [categoryName]);

  const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <main className="App-container">
      <h1 className={styles.pageTitle}>Noticias de: {formattedCategoryName}</h1>
      <div className={styles.noticiasContainer}>
        {loading ? (
          <p>Cargando noticias...</p>
        ) : noticias.length > 0 ? (
          noticias.map((noticia) => (
            <Link to={`/noticia/${noticia.slug}`} key={noticia.slug} className={styles.articleLink}>
              <ArticleCard noticia={noticia} />
            </Link>
          ))
        ) : (
          <p>No se encontraron noticias en esta categoría.</p>
        )}
      </div>
    </main>
  );
}

export default CategoryPage;