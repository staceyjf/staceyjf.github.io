import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";
import { projectsData } from "../../data/data.js";

import SingleProject from "./SingleProject/SingleProject.jsx";

import styles from "./ProjectsSection.module.scss";

function ProjectsSection() {
  const { projectsRef } = useContext(NavigationContext);

  useEffect(() => {
    document.title = "Explore my projects";
    return () => (document.title = "Welcome to Stacey Fanner's portfolio");
  }, []);

  //   const useStyles = makeStyles(() => ({
  //     viewAllBtn: {
  //       color: black,
  //       backgroundColor: blue,
  //       transition: "color 0.2s",
  //       "&:hover": {
  //         color: green,
  //         backgroundColor: blue,
  //       },
  //     },
  //     viewArr: {
  //       color: black,
  //       backgroundColor: green,
  //       width: "40px",
  //       height: "40px",
  //       padding: "0.5rem",
  //       fontSize: "1.05rem",
  //       borderRadius: "50%",
  //       cursor: "pointer",
  //       transition: "background-color 0.2s",
  //       "&:hover": {
  //         color: black,
  //         backgroundColor: green,
  //       },
  //     },
  //   }));

  //   const classes = useStyles();

  return (
    <>
      {projectsData.length > 0 && (
        <div className={styles.projects} ref={projectsRef}>
          <div className={styles.projects_header}>
            <h1>Projects</h1>
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
        </div>
      )}
    </>
  );
}

export default ProjectsSection;
