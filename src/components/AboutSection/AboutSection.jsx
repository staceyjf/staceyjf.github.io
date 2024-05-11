import { useContext, useEffect } from "react";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";

import styles from "./AboutSection.module.scss";

function AboutSection() {
  const { aboutRef } = useContext(NavigationContext);

  useEffect(() => {
    document.title = "Getting to know me";
    return () => (document.title = "Welcome to Stacey Fanner's portfolio");
  }, []);

  return (
    <div className={styles.about} ref={aboutRef}>
      <div className={styles.about_body}>
        <div className={styles.about_description}>
          <h2>Facts about me</h2>
          <div className={styles.about_option_item}>
            <h4 className={styles.about_option_h4}>
              I used to be in <span>advertising</span>
            </h4>
            <p className={styles.about_option_p}>
              My background in planning has given me a problem-solving mindset,
              making me adept at finding solutions in creative and efficient
              ways.
            </p>
          </div>
          <div className={styles.about_option_item}>
            <h4 className={styles.about_option_h4}>
              I’d love to be known for <span>adaptability</span>
            </h4>
            <p className={styles.about_option_p}>
              My capacity to embrace uncertainty, my persistence and passion for
              learning are fundamental aspects of my identity as a resilient
              developer.
            </p>
          </div>
          <div className={styles.about_option_item}>
            <h4 className={styles.about_option_h4}>
              I'm passionate about<span> human-centric design</span>
            </h4>
            <p className={styles.about_option_p}>
              The greatest value comes from balancing the needs of end-users
              with business objectives.
            </p>
          </div>
          <div className={styles.about_option_item}>
            <h4 className={styles.about_option_h4}>
              I have a <span>world record</span>
            </h4>
            <p className={styles.about_option_p}>
              I was part of a 5,877-strong crowd in London that set the Guinness
              World record for the largest coconut ensemble.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
