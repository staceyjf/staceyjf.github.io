import { useContext, useEffect } from "react";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";
import { projectsData } from "../../data/data.js";

import Button from "../Button/Button.jsx";
import SingleProject from "./SingleProject/SingleProject.jsx";

import styles from "./ProjectsSection.module.scss";

function ProjectsSection() {
  const { projectsRef } = useContext(NavigationContext);

  useEffect(() => {
    document.title = "Explore my projects";
    return () => (document.title = "Welcome to Stacey Fanner's portfolio");
  }, []);

  return (
    <>
      {projectsData.length > 0 && (
        <div className={styles.projects} ref={projectsRef}>
          <div className={styles.projects_header}>
            <h2>Project Highlights</h2>
          </div>
          <div className={styles.projects_body}>
            <div className={styles.projects_bodyContainer}>
              {projectsData.slice(0, 4).map((project) => (
                <SingleProject
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>
          </div>
          <div>
            <Button
              className={styles.projectsButton}
              buttonText="DISCOVER MORE"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsSection;
