import { useState, useEffect, useContext } from "react";

import useScreenSize from "../../hooks/useScreenSize";
import HamburgerMenu from "../Navbar/HamburgerMenu.jsx";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";

import styles from "./Navbar.module.scss";

function Navbar() {
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState(true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { introRef, aboutRef, projectsRef, contactRef } =
    useContext(NavigationContext);

  // custom hook to detect screensize which then switches between hamburger menu
  // full  menu
  const detectMobileOrTablet = () => {
    if (screenSize.width < 600) setIsMobile(true);
    else setIsMobile(false);
  };

  //
  // const buttonStyles = ({ isActive }) => {
  //   return isActive
  //     ? `${styles.buttonStyles} ${styles.buttonStyles_active}`
  //     : `${styles.buttonStyles}`;
  // };

  useEffect(() => {
    detectMobileOrTablet();
  }, [screenSize.width]);

  // toggle between hamburger menu and menu
  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  // scroll to my sections
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop, // takes us to the top of the section
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`${styles.nav} ${isHamburgerOpen ? "" : "hamburger_close"}`}
    >
      <div className={styles.nav_left_wrapper}>Stacey Fanner</div>
      {!isMobile && (
        <div className={styles.nav_menu_wrapper}>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(introRef)}
          >
            Home
          </button>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </button>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(projectsRef)}
          >
            Work
          </button>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </button>
        </div>
      )}
      {isMobile && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <HamburgerMenu isOpen={isHamburgerOpen} />
        </div>
      )}
      {isMobile && isHamburgerOpen && (
        <div className={styles.nav_mobile_wrapper}>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(introRef)}
          >
            Home
          </button>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </button>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(projectsRef)}
          >
            Work
          </button>
          <button
            className={styles.buttonStyles}
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
