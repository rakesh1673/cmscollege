import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "../DrawerNavigation/Navheader";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [show, handleShow] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className={`navbar ${show && "navbar-red"}`}>
      <div className="top-nav">
        <div>
          <nav className="nav-1">
            <li className="nav-item">nirf</li>
            <li className="nav-item">Quotations</li>
            <li className="nav-item">Tenders</li>
            <li className="nav-item">Downloads</li>
            <li className="nav-item">Latest Images</li>
            <li className="nav-item">Media Reports</li>
            <li className="nav-item">Students Login</li>
            <li className="nav-item">Faculty Login</li>
            <li className="nav-item">Contact us</li>
          </nav>
        </div>
        <nav className="nav-2">
          <div className="navbar-container">
            <Link to="/">
              <img
                src="https://cmscollege.ac.in/wp-content/themes/cms/assets/images/cms-college-kottayam.png"
                className="cms-logo"
                alt="CMS College"
              />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/organisation"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Organisation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/iqac"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  IQAC
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/academics"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Academics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admissions"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Admissions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/examinations"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Examinations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/campuslife"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Campus Life
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
