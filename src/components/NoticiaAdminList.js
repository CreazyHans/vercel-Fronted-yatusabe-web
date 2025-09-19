import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './NoticiaAdminList.module.css';

function NoticiaAdminList() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNoticias = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/noticias');
      setNoticias(data);
    } catch (error) {
      console.error("Error cargando noticias para el admin", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);
  
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta noticia?')) {
      try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`/api/noticias/${id}`, config);
        fetchNoticias(); 
      } catch (error) {
        console.error('Error al eliminar', error);
        alert('No se pudo eliminar la noticia.');
      }
    }
  };

  if (loading) return <p>Cargando noticias...</p>;

  return (
    <div className={styles.adminListContainer}>
      <h2>Gestionar Noticias</h2>
      <table className={styles.adminTable}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {noticias.map((noticia) => (
            <tr key={noticia._id}>
              <td>{noticia.titulo}</td>
              <td>{noticia.categoria}</td>
              <td>{new Date(noticia.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/admin/editar-html/${noticia.slug}`} className={`${styles.btn} ${styles.btnEdit}`}>
                  Formato
                </Link>
                <button onClick={() => handleDelete(noticia._id)} className={`${styles.btn} ${styles.btnDelete}`}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NoticiaAdminList;