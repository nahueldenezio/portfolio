// Banner.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Banner.css';  // Importación de estilos específicos del banner
import ImgMobile from '../assets/BannerImgMobile.png';  // Importación de la imagen utilizada en el banner

function Banner() {
  // Configuración del slider con opciones como navegación de puntos, desplazamiento y velocidad
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // Estructura del banner que incluye un encabezado y un slider de imágenes
    <header className="banner-header">
      <div className="banner">
        {/* Componente Slider de la librería react-slick con la configuración previamente definida */}
        <Slider {...settings}>
          {/* Contenido de cada diapositiva con una imagen */}
          <div className="banner-img">
            <img src={ImgMobile} alt="Imagen 1" />
          </div>
          <div className="banner-img">
            <img src={ImgMobile} alt="Imagen 2" />
          </div>
          <div className="banner-img">
            <img src={ImgMobile} alt="Imagen 3" />
          </div>
        </Slider>
      </div>
    </header>
  );
}

export default Banner;
