import React, { useState } from 'react';

const Contador = ({ onIncrement, onDecrement, onReset, count }) => {
  return (
    <div className="contador">
      <button onClick={onIncrement}>Incrementar</button>
      <button onClick={onDecrement}>Decrementar</button>
      <button onClick={onReset}>Reset</button>
      <p>Contador: {count}</p>
    </div>
  );
};

export default Contador;
