// MobileFooter.js
import React from "react";
import "../styles/MobileFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function MobileFooter() {
  return (
    <div className="footer-container">
      <h2>Tienda Electronica</h2>

      <div className="btn-footer-container">
        <button className="btn-footer">condiciones</button>
        <button className="btn-footer">trabaja con nosotros</button>
        <button className="btn-footer">medios de pago</button>
        <button className="btn-footer">preguntas frecuentes</button>
      </div>

      <button className="btn-arrepentimiento">botón de arrepentimiento</button>

      <p className="btn-footer-sucursales">
        <FontAwesomeIcon icon={faLocationDot} /> sucursales
      </p>

      <div className="footer-info">
        <p>Whatsapp 1234508840</p>
        <p>denezio13nahuel@gmail.com</p>
        <p> Chivilcoy, Buenos Aires, Argentina</p>
      </div>

      <p className="footer-copyright">© 2023 Nahuel Denezio</p>
    </div>
  );
}

export default MobileFooter;
