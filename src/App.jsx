import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],           
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna 'X' o 'O'
    }
  }
  return null; // No hay ganador
};

function App() {
  // Inicializa el estado del juego desde localStorage si existe, sino con valores por defecto
  const [squares, setSquares] = useState(() => {
    const savedSquares = localStorage.getItem('taino-vs-caribe-squares');
    return savedSquares ? JSON.parse(savedSquares) : Array(9).fill(null);
  });
  const [isXNext, setIsXNext] = useState(() => {
    const savedIsXNext = localStorage.getItem('taino-vs-caribe-isxnext');
    return savedIsXNext !== null ? JSON.parse(savedIsXNext) : true;
  });

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  // Guardar el estado del juego en localStorage
  useEffect(() => {
    localStorage.setItem('taino-vs-caribe-squares', JSON.stringify(squares));
    localStorage.setItem('taino-vs-caribe-isxnext', JSON.stringify(isXNext));
  }, [squares, isXNext]);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return; // Ignora el click si ya hay ganador o la casilla está ocupada
    }

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'T' : 'C'; // Personalización: T por 'Taino' y C por 'Caribe'
    setSquares(newSquares);
    setIsXNext(!isXNext); // Turno alternado
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    localStorage.removeItem('taino-vs-caribe-squares'); // Limpiar localStorage
    localStorage.removeItem('taino-vs-caribe-isxnext');
  };

  // Mensajes
  let status;
  if (winner) {
    status = `¡Felicidades! Ganó el **${winner === 'T' ? 'Cacique Taino' : 'Capitán Caribe'}**! ¡A reventar!`;
  } else if (isDraw) {
    status = "¡Un empate de altura! ¡Volvamos a la batalla!";
  } else {
    status = `Turno del **${isXNext ? 'Cacique Taino (T)' : 'Capitán Caribe (C)'}**`;
  }

  return (
    <div className="game-container">
      <h1 className="title">Taino vs Caribe: Tres en Raya 🇩🇴</h1>
      <div className="status">{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button className="reset-button" onClick={resetGame}>
        Reiniciar Partida
      </button>
    </div>
  );
}

export default App;