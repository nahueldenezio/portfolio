import React from "react";
import Slider from "react-slick";
import "../styles/PopularCategories.css";
import Ball from "../assets/ball.png";
import Bots from "../assets/bots.png";
import sneakers from "../assets/Sneakers.png";
import Breeches from "../assets/Breeches.png";
import BotsMobile from "../assets/BotsMobile.png";

function PopularCategories() {
  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // Sin espacio entre imágenes
    variableWidth: true, // Permitir ancho variable de las imágenes
  };

  return (
    <section>
      <div className="popularcategories">
        <h3 className="popularcategories-h3">
          VISITÁ LAS CATEGORÍAS MÁS POPULARES
        </h3>

        {/* Slider para dispositivos móviles */}
        <Slider {...sliderSettings} className="popular-slider">
          {/* Categoría 2 */}
          <div className="popular-category">
            <img src={Bots} alt="Categoría 2" />
            <div className="category-text-mobile text-2-mobile">Texto 2</div>
          </div>
          {/* Categoría 3 */}
          <div className="popular-category">
            <img src={Breeches} alt="Categoría 3" />
            <div className="category-text-mobile text-3-mobile">Texto 3</div>
          </div>
          {/* Categoría 1 */}
          <div className="popular-category">
            <img src={BotsMobile} alt="Categoría 1" />
            <div className="category-text-mobile text-1-mobile">Texto 1</div>
          </div>
        </Slider>

        {/* Cuadrícula para escritorio */}
        <div className="popular-categories-container desktop-grid">
          {/* Categoría 1 */}
          <div className="popular-category popular-category-left">
            <img src={sneakers} alt="Categoría 1" />
            <div className="category-text-desktop text-1">ZAPATILLAS</div>
          </div>
          {/* Categoría 2 y 3 */}
          <div className="popular-category popular-category-center-horizontal">
            {/* Categoría 2 */}
            <div className="category-item">
              <img src={Bots} alt="Categoría 2" />
              <div className="category-text-desktop text-2">FUTBOL</div>
            </div>
            {/* Categoría 3 */}
            <div className="category-item">
              <img src={Breeches} alt="Categoría 3" />
              <div className="category-text-desktop text-3">CALZAS</div>
            </div>
          </div>
          {/* Categoría 4 */}
          <div className="popular-category popular-category-right">
            <img src={Ball} alt="Categoría 4" />
            <div className="category-text-desktop text-4">PELOTAS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
