import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import useScreenSize from "../../hooks/useScreenSize";
import HamburgerMenu from "../Navbar/HamburgerMenu.jsx";

import styles from "./Navbar.module.scss";

function Navbar() {
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState(true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const detectMobileOrTablet = () => {
    if (screenSize.width < 600) setIsMobile(true);
    else setIsMobile(false);
  };

  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;
  };

  useEffect(() => {
    detectMobileOrTablet();
  }, [screenSize.width]);

  // toggle between hamburger menu and menu
  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav
      className={`${styles.nav} ${isHamburgerOpen ? "" : "hamburger_close"}`}
    >
      <div className={styles.nav_left_wrapper}>Stacey Fanner</div>
      {!isMobile && (
        <div className={styles.nav_menu_wrapper}>
          <NavLink className={linkStyles} to="/">
            Home
          </NavLink>
          <NavLink className={linkStyles} to="/">
            About
          </NavLink>
          <NavLink className={linkStyles} to="/">
            Work
          </NavLink>
          <NavLink className={linkStyles} to="/">
            Contact
          </NavLink>
        </div>
      )}
      {isMobile && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <HamburgerMenu isOpen={isHamburgerOpen} />
        </div>
      )}
      {isMobile && isHamburgerOpen && (
        <div className={styles.nav_mobile_wrapper}>
          <NavLink className={linkStyles} to="/">
            Home
          </NavLink>
          <NavLink className={linkStyles} to="/">
            About
          </NavLink>
          <NavLink className={linkStyles} to="/">
            Work
          </NavLink>
          <NavLink className={linkStyles} to="/">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
