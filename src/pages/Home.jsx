// Importación de la biblioteca React y los componentes necesarios
import React from "react";
import NavBar from "../components/NavBar"; 
import Banner from "../components/Banner";
import Trends from "../components/Trends"; 
import PopularCategories from "../components/PopularCategories"; 
import BestSellers from "../components/BestSellers"; 
import Info from "../components/Info"; 
import Footer from "../components/Footer"; 

function Home() {

  return (
    <>
      <NavBar />
      <Banner /> 
      <Trends /> 
      <PopularCategories />
      <BestSellers /> 
      <Info />
      <Footer />
    </>
  );
}

export default Home;
