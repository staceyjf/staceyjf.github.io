import { useContext } from "react";

import { skillsData } from "../../data/skillsData.js";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";

import Marquee from "react-fast-marquee";
import styles from "./SkillsSection.module.scss";

function SkillsSection() {
  const { skillsRef } = useContext(NavigationContext);

  return (
    <div ref={skillsRef} className={styles.skills}>
      {/* <div className={styles.skills_header}>
        <h2>Skills in my toolbox</h2>
        <p>
          Currently working hard to deepen my skills across core languages,
          frameworks, and databases.
        </p>
      </div> */}
      <div className={styles.skills_container}>
        <div className={styles.skills_skillScroll}>
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
            play={true}
            direction="left"
          >
            {/* map through skills to build the boxes for the marquee */}
            {skillsData.map((skill) => (
              <div className={styles.skills_box} key={skill.id}>
                <i className={skill.icon}></i>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
