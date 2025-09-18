import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    
// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Rutas Públicas
import HomePage from './pages/HomePage';
import NoticiaPage from './pages/NoticiaPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

// Rutas Privadas y Componente de Protección
import PrivateRoute from './components/auth/PrivateRoute';
import AdminPage from './pages/AdminPage';
import EditHtmlPage from './pages/EditHtmlPage';

function App() {
  return (
    <Router>
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

          {/* --- RUTAS PRIVADAS --- */}
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/editar-html/:slug" element={<EditHtmlPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;