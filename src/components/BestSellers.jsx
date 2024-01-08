// BestSellers.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import "../styles/BestSellers.css";  

function BestSellers() {
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        {"<"}
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        {">"}
      </div>
    );
  }

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
    <section>
      {" "}
      <div className="bestsellers-container">
        <h3 className="h3-bestsellers">LAS MAS VENDIDAS</h3>
        <Slider {...settings} className="bestsellers-slider">
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
