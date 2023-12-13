// Importación de la biblioteca React y los componentes necesarios
import React from "react";
import NavBar from "../components/NavBar"; 
import Banner from "../components/Banner";
import Trends from "../components/Trends"; 
import PopularCategories from "../components/PopularCategories"; 
import BestSellers from "../components/BestSellers"; 
import Info from "../components/Info"; 
import Footer from "../components/footer"; 

// Componente principal de la página de inicio
function Home() {
  // Renderiza los componentes en el orden deseado
  return (
    <>
      <NavBar /> {/* Renderiza el componente de la barra de navegación */}
      <Banner /> {/* Renderiza el componente del banner */}
      <Trends /> {/* Renderiza el componente de las tendencias */}
      <PopularCategories /> {/* Renderiza el componente de categorías populares */}
      <BestSellers /> {/* Renderiza el componente de los productos más vendidos */}
      <Info /> {/* Renderiza el componente de información */}
      <Footer /> {/* Renderiza el componente del pie de página */}
    </>
  );
}

// Exporta el componente principal de la página de inicio
export default Home;
