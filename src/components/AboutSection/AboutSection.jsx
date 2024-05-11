import { useContext } from "react";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";

import styles from "./AboutSection.module.scss";

function AboutSection() {
  const { aboutRef } = useContext(NavigationContext);

  return (
    <div className={styles.about} ref={aboutRef}>
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2>hello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sit, doloribus unde deserunt odit cumque repellendus architecto aut
            beatae minus consequuntur nulla neque, obcaecati fugit, rem
            assumenda eius velit? Dolore?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quidem earum architecto enim. Nesciunt illo vero at minus nihil
            necessitatibus hic facilis molestiae quas id nobis molestias,
            ducimus voluptate itaque.
          </p>
        </div>
        <div className="about-img">
          {/* <img
            src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
