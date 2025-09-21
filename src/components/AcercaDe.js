import React from 'react';
import styles from './PrivacyPolicyPage.module.css'; // Reutilizamos los estilos para páginas legales/informativas

const acercaDeHTML = `
  <h1 style="text-align: center;"><b>Acerca de Ya Tu Sabe TV RD</b></h1>

  <p>En <b>Ya Tu Sabe TV RD</b>, somos tu fuente principal de entretenimiento, noticias y chismes del mundo del espectáculo, con un enfoque especial en la vibrante escena dominicana. Nacimos con la misión de mantenerte al día con lo último de tus artistas urbanos, figuras públicas y creadores de contenido favoritos, ofreciendo información relevante y al instante.</p>

  <p>Creemos en la importancia de una comunicación dinámica y accesible, por eso nos esforzamos en ofrecer contenido fresco y atractivo que resuene con nuestra audiencia. Desde los titulares más impactantes hasta los detalles detrás de cámaras, estamos aquí para que no te pierdas nada.</p>

  <h2>Nuestra Misión</h2>
  <p>Proveer a nuestra comunidad digital con contenido de entretenimiento de alta calidad, noticias veraces y análisis perspicaces sobre la cultura del espectáculo, promoviendo el diálogo y la conexión entre nuestros seguidores.</p>

  <h2>Nuestra Visión</h2>
  <p>Ser el medio digital referente para el entretenimiento y la información del espectáculo en la República Dominicana y la diáspora, reconocido por nuestra rapidez, veracidad y compromiso con la audiencia.</p>

  <h2>Conéctate con Nosotros</h2>
  <p>Te invitamos a explorar nuestro sitio, seguirnos en nuestras redes sociales y ser parte de nuestra creciente comunidad. ¡En Ya Tu Sabe TV RD, la información y el entretenimiento nunca paran!</p>
`;

function AcercaDePage() {
  return (
    <main className="App-container">
      <div 
        className={styles.legalPage} 
        dangerouslySetInnerHTML={{ __html: acercaDeHTML }} 
      />
    </main>
  );
}

export default AcercaDePage;