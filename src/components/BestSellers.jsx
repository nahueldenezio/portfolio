// BestSellers.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import "../styles/BestSellers.css";  // Importación de estilos específicos para las mejores vendedoras

function BestSellers() {
  // Función para renderizar una flecha personalizada para la navegación anterior
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        {"<"}
      </div>
    );
  }

  // Función para renderizar una flecha personalizada para la navegación siguiente
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        {">"}
      </div>
    );
  }

  // Configuración del slider con opciones como navegación de puntos, desplazamiento y velocidad
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
          arrows: false,  // Oculta flechas en modo móvil
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
    // Estructura de la sección de las mejores vendedoras que incluye un encabezado y un slider de tarjetas
    <section>
      {" "}
      <div className="bestsellers-container">
        <h3 className="h3-bestsellers">LAS MAS VENDIDAS</h3>
        {/* Componente Slider de la librería react-slick con la configuración previamente definida */}
        <Slider {...settings} className="bestsellers-slider">
          {/* Renderiza varias tarjetas de productos dentro del slider */}
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slider>
      </div>
    </section>
  );
}

export default BestSellers;
