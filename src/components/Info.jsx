// Info.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faWallet,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const InfoSlide = ({ icon, title, description }) => (
  <div className="info-slide">
    <div className="info-content">
      <div className="info-icon">
        <FontAwesomeIcon icon={icon} className="custom-icon" />
      </div>
      <h3 className="info-title">{title}</h3>
      <p className="info-description">{description}</p>
    </div>
  </div>
);

const Info = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const infoData = [
    {
      icon: faBagShopping,
      title: "Elegí los productos que vas a comprar",
      description: "Si querés más de uno, sumalos a tu carrito.",
    },
    {
      icon: faWallet,
      title: "Pagá con el medio de pago que quieras",
      description:
        "Comprá con seguridad: usamos la tecnología de Mercado Pago.",
    },
    {
      icon: faTruck,
      title: "Recibí el producto que esperás",
      description:
        "Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className={`info-container ${isMobile ? "mobile" : "desktop"}`}>
        {isMobile ? (
          <Slider {...sliderSettings} className="slider">
            {infoData.map((item, index) => (
              <InfoSlide key={index} {...item} />
            ))}
          </Slider>
        ) : (
          <div className="desktop-info-container">
            {infoData.map((item, index) => (
              <InfoSlide key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Info;
