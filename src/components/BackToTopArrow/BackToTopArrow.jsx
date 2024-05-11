import React, { useState } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";

import styles from "./BackToTopArrow.module.scss";

function BackToTopArrow() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      style={{ display: visible ? "inline" : "none" }}
      className={styles.backToTop}
    >
      <button onClick={scrollToTop} aria-label="Back to top">
        <FaCircleChevronUp className={styles.icon} />
      </button>
    </div>
  );
}

export default BackToTopArrow;
