// Cards.js
import React from 'react';
import CardImg from '../assets/CardImg.png';  // Importa la imagen del producto
import '../styles/Cards.css';  // Importa los estilos específicos para las tarjetas

export default function Cards() {
  // Estructura de una tarjeta de producto que muestra la imagen, nombre, precio y un botón de compra
  return (
    <div className="card-container">
      <div className="card">
        <img src={CardImg} alt="Producto" className="card-img" />
        <div className="card-content">
          <h3 className="product-name">Samsung Smart Tv 75" UHD</h3>
          <p className="product-price">$1.119.099</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}
