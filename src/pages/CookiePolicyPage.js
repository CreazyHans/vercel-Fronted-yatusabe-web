import React from 'react';
import styles from './LegalPages.module.css'; // Reutilizamos los estilos

const cookiePolicyHTML = `
  <h1 style="text-align: center;"><b>Política de Cookies</b></h1>
  <p>Fecha de entrada en vigor: 2025-09-23</p>

  <h2>1. ¿Qué son las Cookies?</h2>
  <p>Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita ciertos sitios web. Son ampliamente utilizadas para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies nos permiten reconocer su dispositivo o navegador y, en algunos casos, pueden utilizarse para recordar sus preferencias.</p>

  <h2>2. ¿Cómo Utiliza Ya Tu Sabe TV RD las Cookies?</h2>
  <p>En <b>Ya Tu Sabe TV RD</b>, utilizamos cookies y tecnologías de seguimiento similares (como píxeles, balizas web y scripts) para diversos propósitos:</p>
  <ul>
    <li><b>Cookies Esenciales:</b> Son necesarias para el funcionamiento básico de nuestro sitio web (ej. seguridad, funcionalidad básica). Sin estas cookies, el sitio no podría funcionar correctamente.</li>
    <li><b>Cookies de Rendimiento y Análisis:</b> Recopilan información sobre cómo los visitantes usan nuestro sitio web, por ejemplo, qué páginas visitan con más frecuencia. Estas cookies nos ayudan a mejorar el funcionamiento de nuestro sitio web y la experiencia del usuario.</li>
    <li><b>Cookies de Publicidad y Orientación:</b> Son utilizadas por nosotros y por nuestros socios publicitarios para ofrecer anuncios que sean relevantes para usted y sus intereses. Estas cookies rastrean su actividad de navegación en nuestro sitio y otros sitios para crear un perfil de sus intereses y mostrarle anuncios personalizados.</li>
    <li><b>Cookies de Funcionalidad:</b> Permiten que nuestro sitio recuerde las elecciones que usted hace (como su nombre de usuario, idioma o la región en la que se encuentra) y proporcione funciones mejoradas y más personalizadas.</li>
  </ul>

  <h2>3. Cookies de Terceros</h2>
  <p>Nuestro sitio web utiliza servicios de terceros que también pueden almacenar cookies en su dispositivo. Estos terceros incluyen, pero no se limitan a:</p>
  <ul>
    <li><b>Google AdSense / Google Ad Manager (Ezoic):</b> Para mostrar anuncios relevantes. Estas cookies rastrean sus interacciones con los anuncios.</li>
    <li><b>Google Analytics:</b> Para analizar el tráfico del sitio web y el comportamiento del usuario.</li>
    <li>Otros socios publicitarios a través de Ezoic.</li>
  </ul>
  <p>No tenemos control sobre las cookies colocadas por terceros. Para obtener más información sobre sus políticas de privacidad y cómo gestionar sus cookies, le recomendamos visitar los sitios web de los terceros.</p>

  <h2>4. Su Elección Respecto a las Cookies</h2>
  <p>Usted tiene el derecho de decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de cookies configurando los controles de su navegador web para aceptar o rechazar las cookies.</p>
  <ul>
    <li>La mayoría de los navegadores web le permiten controlar las cookies a través de sus configuraciones. Puede configurar su navegador para que le notifique cuando reciba una cookie, lo que le da la opción de aceptarla o no. También puede configurar su navegador para rechazar todas las cookies.</li>
    <li>Tenga en cuenta que, si elige deshabilitar las cookies, algunas partes de nuestro Servicio pueden no funcionar correctamente o es posible que no pueda utilizar algunas de nuestras funciones.</li>
  </ul>
  <p>Para más información sobre las cookies y cómo gestionarlas, puede visitar <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>

  <h2>5. Cambios a Esta Política de Cookies</h2>
  <p>Podemos actualizar nuestra Política de Cookies de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Cookies en esta página.</p>
  <p>Le recomendamos revisar esta Política de Cookies periódicamente para cualquier cambio. Los cambios a esta Política de Cookies son efectivos cuando se publican en esta página.</p>

  <h2>6. Contáctenos</h2>
  <p>Si tiene alguna pregunta sobre esta Política de Cookies, por favor contáctenos por correo electrónico: <b>yatusabetvrd@gmail.com</b>.</p>
`;

function CookiePolicyPage() {
  return (
    <main className="App-container">
      <div 
        className={styles.legalPage} 
        dangerouslySetInnerHTML={{ __html: cookiePolicyHTML }} 
      />
    </main>
  );
}

export default CookiePolicyPage;