import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faUser,
  faShoppingCart,
  faBars,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="mobile-nav-top">
          <div className="burger-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <h1>
            <Link to="/">Mi Tienda</Link>
          </h1>
          <div className="nav-icons">
            <div className="user">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <span className="close-icon close-menu" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <div className="mobile-menu-content">
            <div className="mobile-menu-content-span">
              <span>Mi Tienda</span>
              <div className="line"></div>
            </div>
            <div className="mobile-menu-content-link">
              <Link to="/notebooks" className="mobile-menu-content-link-a">
                Notebooks
              </Link>
              <div className="line-link"></div>
              <Link to="/celulares" className="mobile-menu-content-link-a">
                Celulares
              </Link>
              <div className="line-link"></div>
              <Link to="/teclados" className="mobile-menu-content-link-a">
                Teclados
              </Link>
              <div className="line-link"></div>
              <Link to="/accesorios" className="mobile-menu-content-link-a">
                Accesorios
              </Link>
              <div className="line-link"></div>
              <div className="link-Ofertas-container">
                <Link to="/ofertas" className="link-Ofertas">
                  Ofertas
                </Link>
                <FontAwesomeIcon
                  className="icon-earth"
                  icon={faEarthAmericas}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input className="search-bar-input" type="text" />
            <FontAwesomeIcon className="search-icon-mobile" icon={faSearch} />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="desktop-nav-top">
  
          <div className="logo">
            <h1>
              <Link to="/">Mi Tienda</Link>
            </h1>
          </div>
          <div className="search-bar-desktop">
            <div className="search-bar-input-container-desktop">
              <input type="text" className="search-bar-input" />
              <FontAwesomeIcon
                className="search-icon-dekstop"
                icon={faSearch}
              />
            </div>
          </div>
          <div className="nav-right-desktop">
            <div className="user">
              <FontAwesomeIcon icon={faUser} />
              <span>Mi Cuenta</span>
            </div>
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
        </div>

        <div className="desktop-menu-content-link">
          <Link to="/notebooks" className="desktop-menu-content-link-a">
            Notebooks
          </Link>
          <div className="line-link"></div>
          <Link to="/celulares" className="desktop-menu-content-link-a">
            Celulares
          </Link>
          <div className="line-link"></div>
          <Link to="/teclados" className="desktop-menu-content-link-a">
            Teclados
          </Link>
          <div className="line-link"></div>
          <Link to="/accesorios" className="desktop-menu-content-link-a">
            Accesorios
          </Link>
          <div className="line-link"></div>
          <div className="link-Ofertas-container">
            <Link to="/ofertas" className="link-Ofertas">
              Ofertas
            </Link>
            <FontAwesomeIcon className="icon-earth" icon={faEarthAmericas} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
