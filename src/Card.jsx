import React from 'react';

const Card = ({ data, count }) => {
    return (
      <div className="card">
        <img src={data.image} alt={data.title} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
        <h2>
          {data.title}      {count}
        </h2>
        <p>{data.text}</p>
        <button>Detalles</button>
      </div>
    );
  };
  

export default Card;
