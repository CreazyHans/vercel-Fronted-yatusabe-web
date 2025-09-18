import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import CreateNoticiaForm from '../components/CreateNoticiaForm';
    import NoticiaAdminList from '../components/NoticiaAdminList'; // <-- IMPORTAMOS LA LISTA

    function AdminPage() {
      const navigate = useNavigate();

      const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
      };

      return (
        <div className="App-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <h1 className="page-title" style={{marginBottom: '20px'}}>Panel de Administrador</h1>
            <button onClick={handleLogout} className="submit-btn" style={{width: 'auto', padding: '10px 20px', marginBottom: '20px'}}>
              Cerrar Sesión
            </button>
          </div>
          
          {/* Mostramos primero el formulario de creación */}
          <CreateNoticiaForm />

          {/* Y debajo, la lista de noticias para gestionar */}
          <NoticiaAdminList />

        </div>
      );
    }

    export default AdminPage;