import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    
// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Asegúrate de que este archivo exista en components/ScrollToTop.js

// Rutas Públicas
import HomePage from './pages/HomePage';
import NoticiaPage from './pages/NoticiaPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import AcercaDePage from './pages/AcercaDe';
import ContactoPage from './pages/Contacto';

// Rutas Privadas y Componente de Protección
import PrivateRoute from './components/auth/PrivateRoute';
import AdminPage from './pages/AdminPage';
import EditHtmlPage from './pages/EditHtmlPage';

function App() {
  return (
    <Router>
      {/* 
        El div className="App" ahora tiene su etiqueta de cierre correctamente al final,
        después del Footer.
      */}
      <div className="App"> {/* Etiqueta de apertura */}
        <ScrollToTop /> 
        
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* --- RUTAS PÚBLICAS --- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/noticia/:slug" element={<NoticiaPage />} />
            <Route path="/categoria/:categoryName" element={<CategoryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
            <Route path="/acerca-de" element={<AcercaDePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            
            {/* --- RUTAS PRIVADAS --- */}
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/editar-html/:slug" element={<EditHtmlPage />} />
            </Route>
            {/* Si tienes una ruta 404, también iría aquí, por ejemplo: */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div> {/* <-- ¡Aquí está la etiqueta de cierre del div.App que faltaba! */}
    </Router>
  );
}

export default App;