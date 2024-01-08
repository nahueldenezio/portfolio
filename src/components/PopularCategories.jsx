import React from "react";
import Slider from "react-slick";
import "../styles/PopularCategories.css";
import Mouse from "../assets/mouse.png";
import Headphone from "../assets/headphones.png";
import Keyboard from "../assets/keyboard.png";
import videoCard from "../assets/videoCard.png";

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
          <div className="popular-category">
            <img src={Mouse} alt="Categoría 2" />
            <div className="category-text-mobile text-2-mobile">Texto 2</div>
          </div>
          <div className="popular-category">
            <img src={Keyboard} alt="Categoría 3" />
            <div className="category-text-mobile text-3-mobile">Texto 3</div>
          </div>
          <div className="popular-category">
            <img src={videoCard} alt="Categoría 1" />
            <div className="category-text-mobile text-1-mobile">Texto 1</div>
          </div>
          <div className="popular-category">
            <img src={Headphone} alt="Categoría 4" />
            <div className="category-text-mobile text-4-mobile">Texto 4</div>
          </div>
        </Slider>

        {/* Cuadrícula para escritorio */}
        <div className="popular-categories-container desktop-grid">
          <div className="popular-category popular-category-left">
            <img src={videoCard} alt="Categoría 1" />
            <div className="category-text-desktop text-1">PLACAS DE VIDEO</div>
          </div>
          <div className="popular-category popular-category-center-horizontal">
            <div className="category-item">
              <img src={Mouse} alt="Categoría 2" />
              <div className="category-text-desktop text-2">MOUSE</div>
            </div>
            {/* <div className="category-item">
              <img src={Keyboard} alt="Categoría 3" />
              <div className="category-text-desktop text-3">TECLADOS</div>
            </div> */}
          </div>
          <div className="popular-category popular-category-right">
            <img src={Headphone} alt="Categoría 4" />
            <div className="category-text-desktop text-4">AURICULARES</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
