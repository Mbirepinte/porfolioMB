import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import ProgressiveImage from "react-progressive-image";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <ProgressiveImage
              src={information.brandImage}
              placeholder="/images/about-image-placeholder.png"
            >
              {(src) => <img src={src} alt="brandimage" />}
            </ProgressiveImage>
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>Qui suis-je?</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Mon parcours</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>Mes réalisations </span>
            </NavLink>
          </li>
          <li>
         {/*    <NavLink to="/blogs">
              <span>Blogs</span>
            </NavLink> */}
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://michaelBirepinte.com"
            >
              Michael Birepinte
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
