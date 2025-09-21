import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {currentYear} Ya Tu Sabe TV RD. Todos los derechos reservados.</p>
        <div className={styles.footerLinks}>
          <Link to="/acerca-de">Acerca de Nosotros</Link> {/* <-- Nuevo enlace */}
          <Link to="/contacto">Contacto</Link>           {/* <-- Nuevo enlace */}
          <Link to="/politica-de-privacidad">Política de Privacidad</Link>
          <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;