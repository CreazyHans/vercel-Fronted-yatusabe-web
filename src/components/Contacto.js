import React from 'react';
import styles from './PrivacyPolicyPage.module.css'; // Reutilizamos los estilos

const contactoHTML = `
  <h1 style="text-align: center;"><b>Contáctanos</b></h1>

  <p>En <b>Ya Tu Sabe TV RD</b>, valoramos tu opinión y estamos aquí para escucharte. Si tienes preguntas, sugerencias, o deseas informarnos sobre alguna noticia relevante, no dudes en contactarnos. Tu feedback es esencial para seguir mejorando y ofrecerte el mejor contenido.</p>

  <h2>Información de Contacto</h2>
  <ul>
    <li><b>Correo Electrónico:</b> <a href="mailto:yatusabetvrd@gmail.com">yatusabetvrd@gmail.com</a></li>
    <li><b>Redes Sociales:</b> Síguenos en nuestras plataformas para estar al día con las últimas noticias y interactuar con nuestra comunidad.</li>
    <!-- Aquí podrías añadir enlaces a tus redes sociales si quieres -->
  </ul>

  <h2>Envíanos un Mensaje</h2>
  <p>También puedes utilizar el siguiente formulario de contacto para enviarnos un mensaje directamente. Nos esforzamos por responder a todas las consultas lo antes posible.</p>

  <form class="${styles.contactForm}">
    <div class="${styles.formGroup}">
      <label for="nombre">Nombre Completo:</label>
      <input type="text" id="nombre" name="nombre" required />
    </div>
    <div class="${styles.formGroup}">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="${styles.formGroup}">
      <label for="asunto">Asunto:</label>
      <input type="text" id="asunto" name="asunto" required />
    </div>
    <div class="${styles.formGroup}">
      <label for="mensaje">Tu Mensaje:</label>
      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
    </div>
    <button type="submit" class="${styles.submitButton}">Enviar Mensaje</button>
  </form>
`;

function ContactoPage() {
  return (
    <main className="App-container">
      <div 
        className={styles.legalPage} 
        dangerouslySetInnerHTML={{ __html: contactoHTML }} 
      />
    </main>
  );
}

export default ContactoPage;