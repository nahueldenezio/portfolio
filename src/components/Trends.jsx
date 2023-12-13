// Trends.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import "../styles/Trends.css";

function Trends() {
  // Función para la flecha personalizada "Anterior"
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        {"<"}
      </div>
    );
  }

  // Función para la flecha personalizada "Siguiente"
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        {">"}
      </div>
    );
  }

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false, // Oculta flechas en modo móvil
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <section>
      <div className="trends-container">
        <h3 className="h3-trends">TENDENCIAS</h3>
        <Slider {...settings} className="trends-slider">
          {/* Renderiza las tarjetas de tendencias */}
          {Array.from({ length: 10 }, (_, index) => (
            <Cards key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Trends;
