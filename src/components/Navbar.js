import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import styles from './Navbar.module.css';
    import logo from '../assets/logo.png';
    import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

    function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);

      const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
      };

      const closeMobileMenu = () => {
        setMenuOpen(false);
      };

      return (
        <header className={styles.navbar}>
          <div className={styles.navbarContainer}>
            {/* --- LOGO (siempre visible) --- */}
            <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
              <img src={logo} alt="Ya Tu Sabe TV RD Logo" />
              <span className={styles.logoText}>YA TU SABE TV RD</span>
            </Link>

            {/* --- MENÚ DE ESCRITORIO (se oculta en móvil) --- */}
            <nav className={styles.navbarMenuDesktop}>
              <Link to="/" className={styles.navbarLink}>Inicio</Link>
              <Link to="/categoria/Nacionales" className={styles.navbarLink}>Nacionales</Link>
              <Link to="/categoria/Internacionales" className={styles.navbarLink}>Internacionales</Link>
              <Link to="/categoria/Espectáculo" className={styles.navbarLink}>Espectáculo</Link>
              <Link to="/categoria/Tecnología" className={styles.navbarLink}>Tecnología</Link>
              <Link to="/categoria/Economía" className={styles.navbarLink}>Economía</Link>
              <Link to="/categoria/Deportes" className={styles.navbarLink}>Deportes</Link>
              <Link to="/categoria/Salud" className={styles.navbarLink}>Salud</Link>
            </nav>

            {/* --- ICONOS SOCIALES DE ESCRITORIO (se ocultan en móvil) --- */}
            <div className={styles.socialIconsDesktop}>
              <a href="https://www.facebook.com/profile.php?id=61580534219655" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/yatusabetvrd/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@yatusabetvrd0" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>

            {/* --- BOTÓN HAMBURGUESA (solo visible en móvil) --- */}
            <div className={styles.navbarHamburger} onClick={handleMenuToggle}>
              {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
            </div>
          </div>

          {/* --- MENÚ DESPLEGABLE MÓVIL (oculto por defecto) --- */}
          <nav className={`${styles.navbarMenuMobile} ${menuOpen ? styles.active : ''}`}>
            <Link to="/" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Inicio</Link>
            <Link to="/categoria/Nacionales" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Nacionales</Link>
            <Link to="/categoria/Internacionales" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Internacionales</Link>
            <Link to="/categoria/Espectáculo" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Espectáculo</Link>
            <Link to="/categoria/Tecnología" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Tecnología</Link>
            <Link to="/categoria/Economía" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Economía</Link>
            <Link to="/categoria/Deportes" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Deportes</Link>
            <Link to="/categoria/Salud" className={styles.navbarLinkMobile} onClick={closeMobileMenu}>Salud</Link>
            {/* Iconos sociales para el menú móvil */}
            <div className={styles.socialIconsMobile}>
              <a href="https://www.facebook.com/profile.php?id=61580534219655" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/yatusabetvrd/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@yatusabetvrd0" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </nav>
        </header>
      );
    }

    export default Navbar;