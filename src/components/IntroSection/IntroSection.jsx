import React from "react";

import { personalData } from "../../data/data.js";

import Button from "../Button/Button";
import styles from "./IntroSection.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function IntroSection() {
  // download CV functionality via browser's window (window interface)
  const onClickCV = () => {
    window.open(personalData.cvPdf, "_blank");
  };

  return (
    <div className={styles.landing}>
      <div className={styles.landing_container}>
        <div className={styles.landing_container_left}>
          <div className={styles.landing_container_left_content}>
            <a href={personalData.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin
                className={styles.landing_social}
                aria-label="LinkedIn"
              />
            </a>

            <a href={personalData.gitHub} target="_blank" rel="noreferrer">
              <FaGithub className={styles.landing_social} aria-label="GitHub" />
            </a>
          </div>
        </div>
        <img
          src={personalData.image}
          alt="Profile picture of Stacey"
          className={styles.landing_img}
        />
        <div className={styles.landing_container_right}>
          <div className={styles.landing_container_right_content}>
            <h6>Aspringing Tech </h6>
            <h1>Stacey Fanner</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              dignissimos commodi nam, quo rerum voluptates asperiores non nihil
              labore, quidem, tempora aliquam dolorum ex illo numquam
              consequatur quasi recusandae inventore.
            </p>

            <div
              className={styles.landing_container_right_buttonContainer}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
