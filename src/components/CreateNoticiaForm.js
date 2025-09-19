import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateNoticiaForm.css';

const API_BASE_URL = 'https://vercel-bakend-yatusabe-web.vercel.app';


function CreateNoticiaForm() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [slug, setSlug] = useState('');
  const [resumen, setResumen] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [categoria, setCategoria] = useState('General');
  const [mensaje, setMensaje] = useState('');

    const handleTituloChange = (e) => {
    const nuevoTitulo = e.target.value;
    setTitulo(nuevoTitulo);
    const nuevoSlug = nuevoTitulo.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '') // Corregido: \- eliminado
    .replace(/--+/g, '-');    // Corregido: \- eliminado
    setSlug(nuevoSlug);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('Publicando...');
    
    const nuevaNoticia = { titulo, slug, resumen, contenido, imagenUrl, categoria };

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setMensaje("No estás autorizado. Por favor, inicia sesión.");
        return;
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      
      
      // const response = await axios.post('/api/noticias', ...); // ANTES
const response = await axios.post(`${API_BASE_URL}/api/noticias , nuevaNoticia, config`); // DESPUÉS
      navigate(`/admin/editar-html/${response.data.slug}`);

    } catch (error) {
    setMensaje('Error al publicar la noticia. Revisa los campos o tu sesión.');
    console.error('Error en la publicación:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h2>Crear Nueva Noticia</h2>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" value={titulo} onChange={handleTituloChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="slug">URL (Slug)</label>
        <input type="text" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="resumen">Resumen</label>
        <textarea id="resumen" value={resumen} onChange={(e) => setResumen(e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="contenido">Contenido Completo (Texto Plano)</label>
        <textarea id="contenido" value={contenido} onChange={(e) => setContenido(e.target.value)} rows="10" required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="imagenUrl">URL de la Imagen</label>
        <input type="text" id="imagenUrl" value={imagenUrl} onChange={(e) => setImagenUrl(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="categoria">Categoría</label>
        <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="General">General</option>
          <option value="Nacionales">Nacionales</option>
          <option value="Internacionales">Internacionales</option>
          <option value="Espectáculo">Espectáculo</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Economía">Economía</option>
          <option value="Deportes">Deportes</option>
          <option value="Salud">Salud</option>
          <option value="Chisme">Chisme</option>
          <option value="Música">Música</option>
          <option value="Urbano">Urbano</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">Publicar y Editar Formato</button>
      {mensaje && <p className="form-message">{mensaje}</p>}
    </form>
  );
}

export default CreateNoticiaForm;