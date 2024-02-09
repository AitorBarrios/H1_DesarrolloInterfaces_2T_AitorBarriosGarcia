import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio'
import Servicios from './Servicios';
import Contacto from './Contacto';
import Login from './Login';
import Registro from './Registro';

const App = () => {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Clinica Veterinaria: NintenDogCats</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to ="/Inicio" class="nav-link" aria-current="page">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link to="/Servicios" class="nav-link">Servicios</Link>
              </li>
              <li class="nav-item">
                <Link to="/Contacto" class="nav-link">Contacto</Link>
              </li>
              <li class="nav-item">
                <Link to="/Login" class="nav-link">Login</Link>
              </li>
              <li class="nav-item">
                <Link to="/Registro" class="nav-link">Registro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
};

export default App;
