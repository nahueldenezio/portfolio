import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Banner.css';  
import BannerImgMobile from '../assets/Banner.jpg';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <header className="banner-header">
      <div className="banner">
        <Slider {...settings}>
          <div className="banner-img">
            <img src={BannerImgMobile} alt="Imagen 1" />
          </div>
          <div className="banner-img">
            <img src={BannerImgMobile} alt="Imagen 2" />
          </div>
          <div className="banner-img">
            <img src={BannerImgMobile} alt="Imagen 3" />
          </div>
        </Slider>
      </div>
    </header>
  );
}

export default Banner;
