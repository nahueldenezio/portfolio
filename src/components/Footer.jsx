// Footer.js
import React from "react";
import MobileFooter from "./FooterMobile";  // Importa el componente de pie de página para dispositivos móviles
import DesktopFooter from "./FooterDesktop";  // Importa el componente de pie de página para dispositivos de escritorio
import useWindowSize from "./useWindowsSize";  // Asegúrate de implementar un hook para obtener el tamaño de la pantalla

function Footer() {
  const { width } = useWindowSize();  // Obtiene el ancho de la pantalla mediante el hook

  // Renderiza el componente de pie de página correspondiente según el ancho de la pantalla
  return (
    <footer>
      <div>{width && width <= 767 ? <MobileFooter /> : <DesktopFooter />}</div>
    </footer>
  );
}

export default Footer;
