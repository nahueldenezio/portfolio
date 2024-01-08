// Footer.js
import React from "react";
import MobileFooter from "./FooterMobile";
import DesktopFooter from "./FooterDesktop";  
import useWindowSize from "./useWindowsSize"; 

function Footer() {
  const { width } = useWindowSize();  // Obtiene el ancho de la pantalla mediante el hook

  return (
    <footer>
      <div>{width && width <= 767 ? <MobileFooter /> : <DesktopFooter />}</div>
    </footer>
  );
}

export default Footer;
