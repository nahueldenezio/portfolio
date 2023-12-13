// MobileFooter.js
import React from "react";
import "../styles/MobileFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PierceLogo from "../assets/PierceLogo.png";
import VTEXlogo from "../assets/VTEXlogo.png";
import DatafiscalWeb from "../assets/Data-fiscal-Web.png";

function MobileFooter() {
  return (
    <div className="footer-container">
      {/* Encabezado de la sección de la tienda */}
      <h2>Mi Tienda</h2>

      {/* Contenedor de botones */}
      <div className="btn-footer-container">
        <button className="btn-footer">condiciones</button>
        <button className="btn-footer">trabaja con nosotros</button>
        <button className="btn-footer">medios de pago</button>
        <button className="btn-footer">preguntas frecuentes</button>
      </div>

      {/* Botón de arrepentimiento */}
      <button className="btn-arrepentimiento">botón de arrepentimiento</button>

      {/* Enlace de sucursales */}
      <p className="btn-footer-sucursales">
        <FontAwesomeIcon icon={faLocationDot} /> sucursales
      </p>

      {/* Información de contacto */}
      <div className="footer-info">
        <p>Whatsapp 2215137270</p>
        <p>ecommerce@mateu.com.ar </p>
        <p> La Plata 1900, Buenos Aires, Argentina</p>
      </div>

      {/* Información de Pierce */}
      <div className="footer-Pierce-info">
        <p>Powered by Pierce commerce</p> <img src={PierceLogo} alt="" />
      </div>

      {/* Pie de página */}
      <p className="footer-copyright">© 2023 MateuSports</p>

      {/* Sección final del pie de página */}
      <div className="footer-end">
        <img src={DatafiscalWeb} alt="" />
        <img src={VTEXlogo} alt="" className="footer-vtex-logo"/>
      </div>
    </div>
  );
}

export default MobileFooter;
