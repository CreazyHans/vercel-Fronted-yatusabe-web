import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar la ruta (pathname), desplázate al principio de la página
    window.scrollTo(0, 0);
  }, [pathname]); // Este efecto se ejecuta cada vez que 'pathname' cambia

  return null; // Este componente no renderiza nada visible
}

export default ScrollToTop;