import React from 'react';


function Square({ value, onClick }) {
  // Clase condicional para estilos basados en el jugador (Taino o Caribe)
  const playerClass = value === 'T' ? 'taino' : value === 'C' ? 'caribe' : '';
  
  return (
    <button className={`square ${playerClass}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;