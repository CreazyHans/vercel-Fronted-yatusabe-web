    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios';
    // Crea un LoginPage.module.css para los estilos si quieres

    const API_BASE_URL = 'https://vercel-bakend-yatusabe-web.vercel.app';


    function LoginPage() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const config = { headers: { 'Content-Type': 'application/json' } };
          const { data } = await axios.post(`${API_BASE_URL}/api/users/login`);
          localStorage.setItem('authToken', data.token); // Guardamos el token
          navigate('/admin'); // Redirigimos al admin
        } catch (err) {
          setError('Email o contraseña inválidos');
        }
      };

      return (
        <div className="App-container">
          <form onSubmit={submitHandler} className="create-form">
            <h1 className="page-title">Iniciar Sesión</h1>
            {error && <p className="form-message" style={{color: 'red'}}>{error}</p>}
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="submit-btn">Entrar</button>
          </form>
        </div>
      );
    }
    
    export default LoginPage;