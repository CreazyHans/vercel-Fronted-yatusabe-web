import React, { useState } from 'react';
import styles from './PrivacyPolicyPage.module.css';

function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [status, setStatus] = useState(''); // Para mostrar mensajes de éxito/error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el recargado de la página por defecto
    setStatus('Enviando...'); // Mensaje mientras se envía

    try {
      // Usamos la ruta API que definimos en vercel.json
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' }); // Limpia el formulario
      } else {
        const errorData = await response.json();
        setStatus(`Error al enviar el mensaje: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Hubo un error de conexión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <main className="App-container">
      <div className
        ={styles.legalPage} 
        // Eliminamos dangerouslySetInnerHTML y creamos el contenido directamente
      >
        <h1 style={{ textAlign: 'center' }}><b>Contáctanos</b></h1>

        <p>En <b>Ya Tu Sabe TV RD</b>, valoramos tu opinión y estamos aquí para escucharte. Si tienes preguntas, sugerencias, o deseas informarnos sobre alguna noticia relevante, no dudes en contactarnos. Tu feedback es esencial para seguir mejorando y ofrecerte el mejor contenido.</p>

        <h2>Información de Contacto</h2>
        <ul>
          <li><b>Correo Electrónico:</b> <a href="mailto:yatusabetvrd@gmail.com">yatusabetvrd@gmail.com</a></li>
          <li><b>Redes Sociales:</b> Síguenos en nuestras plataformas para estar al día con las últimas noticias y interactuar con nuestra comunidad.</li>
        </ul>

        <h2>Envíanos un Mensaje</h2>
        <p>También puedes utilizar el siguiente formulario de contacto para enviarnos un mensaje directamente. Nos esforzamos por responder a todas las consultas lo antes posible.</p>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre Completo:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="asunto">Asunto:</label>
            <input 
              type="text" 
              id="asunto" 
              name="asunto" 
              value={formData.asunto}
              onChange={handleChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Tu Mensaje:</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              rows="5" 
              value={formData.mensaje}
              onChange={handleChange}
              required 
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          {status && <p className={styles.formStatus}>{status}</p>} {/* Muestra el estado */}
        </form>
      </div>
    </main>
  );
}

export default ContactoPage;