// Cards.js
import React from 'react';
import CardImg from '../assets/notebook.png';  
import '../styles/Cards.css';  

export default function Cards() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={CardImg} alt="Producto" className="card-img" />
        <div className="card-content">
          <h3 className="product-name">MacBook Pro</h3>
          <p className="product-price">$1.119.099</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}
