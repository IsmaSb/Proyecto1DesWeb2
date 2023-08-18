import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Contador from './Contador';

const data = [
  {
    title: 'Mercurio',
    text: 'Mercurio es el planeta más cercano al Sol.',
    image: 'https://www.escuelapedia.com/wp-content/uploads/2011/04/mercurio-planeta.jpg', 
  },
  {
    title: 'Venus',
    text: 'Venus es conocido por su atmósfera espesa y nublada.',
    image: 'https://www.rmg.co.uk/sites/default/files/styles/full_width_1440/public/venus-clouds.jpg?itok=Lxozd_xx', 
  },
  {
    title: 'Tierra',
    text: 'La Tierra es el único planeta conocido que tiene vida. Está compuesta por océanos, continentes y una atmósfera rica en oxígeno.',
    image: 'https://s1.significados.com/foto/earth-11015-1920-41.jpg', 
  },
  {
    title: 'Marte',
    text: 'Marte es conocido como el "Planeta Rojo" debido a su color característico. Ha sido objeto de exploración debido a la posibilidad de encontrar signos de vida pasada o presente.',
    image: 'https://www.clarin.com/img/2022/10/19/marte-retrogrado-en-geminis-2022___i3HVs5gUo_2000x1500__1.jpg', 
  },
  {
    title: 'Júpiter',
    text: 'Júpiter es el planeta más grande del Sistema Solar. Tiene una gran mancha roja, que es una gigantesca tormenta en su atmósfera.',
    image: 'https://cdn.britannica.com/66/155966-131-17B5B518/Jupiter.jpg', 
  },
  {
    title: 'Saturno',
    text: 'Saturno es conocido por sus anillos impresionantes. Está compuesto principalmente de hidrógeno y helio y tiene una característica mancha hexagonal en su polo norte.',
    image: 'https://thumbs.dreamstime.com/b/saturno-30851883.jpg', 
  },

];


function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Planetas del Sistema Solar</h1>
      <div className="card-container">
        {data.map((planet, index) => (
          <Card key={index} data={planet} count={count} />
        ))}
      </div>
      <Contador
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        count={count}
      />
    </div>
  );
}

export default App;
