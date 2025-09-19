import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Usamos estilos globales

const API_BASE_URL = 'https://vercel-bakend-yatusabe-web.vercel.app';



function EditHtmlPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [noticia, setNoticia] = useState(null);
  const [contenido, setContenido] = useState('');
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  // --- FUNCIÓN FALTANTE 1: useEffect para buscar la noticia ---
  useEffect(() => {
    const fetchNoticia = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/noticias/${slug}`);
        setNoticia(response.data);
        setContenido(response.data.contenido || '');
      } catch (error) {
        console.error("Error al cargar la noticia", error);
        setMensaje("No se pudo cargar la noticia para editar.");
      } finally {
        setLoading(false);
      }
    };
    fetchNoticia();
  }, [slug]);

  // --- FUNCIÓN FALTANTE 2: handleSave para guardar los cambios ---
  const handleSave = async () => {
    if (!noticia) return;
    setMensaje("Guardando...");
    try {
      const token = localStorage.getItem('authToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`${API_BASE_URL}/api/noticias/${noticia._id}`, { contenido }, config);
      setMensaje("¡Formato guardado con éxito!");
      setTimeout(() => navigate(`/noticia/${slug}`), 2000);
    } catch (error) {
      console.error("Error al guardar", error);
      setMensaje("Error al guardar los cambios.");
    }
  };

  if (loading) return <div className="App-container"><h1 className="page-title">Cargando...</h1></div>;

  return (
    <div className="App-container">
      <h1 className="page-title">Editar HTML del Contenido</h1>
      <p style={{textAlign: 'center', marginBottom: '20px'}}><strong>Noticia:</strong> {noticia?.titulo}</p>
      <div className="form-group">
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows="20"
          style={{ width: '100%', fontFamily: 'monospace', fontSize: '14px', padding: '10px', border: '1px solid #ccc' }}
        />
      </div>
      <button onClick={handleSave} className="submit-btn" style={{marginTop: '20px', width: '100%'}}>Guardar Formato</button>
      {mensaje && <p className="form-message" style={{marginTop: '15px'}}>{mensaje}</p>}
    </div>
  );
}

export default EditHtmlPage;