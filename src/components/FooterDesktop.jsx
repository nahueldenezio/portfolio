// DesktopFooter.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PierceLogo from "../assets/PierceLogo.png";
import VTEXlogo from "../assets/VTEXlogo.png";
import DatafiscalWeb from "../assets/Data-fiscal-Web.png";
import "../styles/DesktopFooter.css";

function DesktopFooter() {
  return (
    <div className="footer-container-desktop">
      <div className="footer-left-desktop">
        {/* Contenedor de botones de pie de página */}
        <div className="btn-footer-container-desktop">
          <button className="btn-footer-desktop">condiciones</button>
          <button className="btn-footer-desktop">trabaja con nosotros</button>
          <button className="btn-footer-desktop">medios de pago</button>
          <button className="btn-footer-desktop">preguntas frecuentes</button>
        </div>
        {/* Botón de arrepentimiento */}
        <button className="btn-arrepentimiento-desktop">
          botón de arrepentimiento
        </button>

        {/* Información de Pierce */}
        <div className="footer-Pierce-info-desktop">
          <p>Powered by Pierce commerce</p>{" "}
          <img src={PierceLogo} alt="" className="piercelogo" />
          <img src={VTEXlogo} alt="" className="footer-vtex-logo-desktop" />
        </div>
      </div>

      <h2>Mi Tienda</h2>

      <div>
        {/* Enlaces y detalles de contacto */}
        <p className="btn-footer-sucursales-desktop">
          <FontAwesomeIcon icon={faLocationDot} /> sucursales
        </p>
        <div className="footer-info-desktop">
          <p>Whatsapp 2215137270</p>
          <p>ecommerce@mateu.com.ar </p>
          <p> La Plata 1900, Buenos Aires, Argentina</p>
        </div>

        {/* Pie de página */}
        <div className="footer-end-desktop">
          <p className="footer-copyright-desktop">© 2023 MateuSports</p>
          <img src={DatafiscalWeb} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
