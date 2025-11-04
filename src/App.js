import React from 'react';
import NavBar from './components/NavBar'; // Importamos NavBar
import ItemListContainer from './components/ItemListContainer'; // Importamos ItemListContainer

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Renderizamos NavBar */}
      <ItemListContainer greeting="¡Bienvenido a Aura Design! Descubre nuestros pasacalles, remeras y banderas pintadas a mano." /> {/* Renderizamos ItemListContainer con la prop greeting */}
    </div>
  );
}

export default App;
