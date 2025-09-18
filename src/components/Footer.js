// en frontend/src/components/Footer.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    
    // 1. IMPORTAMOS LOS ESTILOS COMO UN MÓDULO
    import styles from './Footer.module.css'; 

    function Footer() {
      const currentYear = new Date().getFullYear();
      return (
        // 2. USAMOS LA NUEVA SINTAXIS PARA LAS CLASES
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <p>&copy; {currentYear} Ya Tu Sabe TV RD. Todos los derechos reservados.</p>
            <div className={styles.footerLinks}>
              <Link to="/politica-de-privacidad">Política de Privacidad</Link>
              <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;