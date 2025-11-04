import React from 'react';
import CartWidget from './CartWidget'; // Importamos el CartWidget

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="aura.logo" alt="Aura Design" />
        <h1>Aura Design</h1> 
      </div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li> {/* Enlaces relacionados con pasacalles, remeras, banderas */}
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget /> 
    </nav>
  );
};

export default NavBar;