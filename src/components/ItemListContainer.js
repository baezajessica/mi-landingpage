import React from 'react';

const ItemListContainer = ({ greeting }) => { // Recibimos la prop "greeting"
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2> {/* Mostramos el mensaje de bienvenida usando la prop */}
      <p>Aquí aparecerá el catálogo de productos de Aura Design: pasacalles, remeras y banderas pintadas a mano.</p>
    </div>
  );
};

export default ItemListContainer;