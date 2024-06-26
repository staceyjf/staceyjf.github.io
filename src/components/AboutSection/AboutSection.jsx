import { useContext, useEffect } from "react";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";

import SkillsSection from "../SkillsSection/SkillsSection.jsx";

import styles from "./AboutSection.module.scss";

function AboutSection() {
  const { aboutRef } = useContext(NavigationContext);

  return (
    <div className={styles.about} ref={aboutRef}>
      <div className={styles.about_body}>
        <div className={styles.about_description}>
          <div className={styles.about_header}>
            <h2>Facts about me</h2>
          </div>
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
              The greatest value comes from balancing the needs & wants of
              end-users with the deliverables of the business.
            </p>
          </div>
          <div className={styles.about_option_item}>
            <h4 className={styles.about_option_h4}>
              I'm dedicated to
              <span> continuous learning </span>
            </h4>
            <p className={styles.about_option_p}>
              Building across a diverse range of languages, front and back-end
              frameworks, testing and databases, I work to continual upskill the
              tools in my toolbox.
            </p>
          </div>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
}

export default AboutSection;
