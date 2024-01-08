// DesktopFooter.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/DesktopFooter.css";

function DesktopFooter() {
  return (
    <div className="footer-container-desktop">
      <div className="footer-left-desktop">
        <div className="btn-footer-container-desktop">
          <button className="btn-footer-desktop">condiciones</button>
          <button className="btn-footer-desktop">trabaja con nosotros</button>
          <button className="btn-footer-desktop">medios de pago</button>
          <button className="btn-footer-desktop">preguntas frecuentes</button>
        </div>
        <button className="btn-arrepentimiento-desktop">
          botón de arrepentimiento
        </button>

      </div>

      <h2>Mi Tienda</h2>

      <div>
        <p className="btn-footer-sucursales-desktop">
          <FontAwesomeIcon icon={faLocationDot} /> sucursales
        </p>
        <div className="footer-info-desktop">
          <p>Whatsapp 1234508840</p>
          <p>denezio13nahuel@gmail.com </p>
          <p>Chivilcoy Buenos Aires, Argentina</p>
        </div>

      </div>
    </div>
  );
}

export default DesktopFooter;
