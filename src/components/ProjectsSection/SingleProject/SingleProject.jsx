import { FaPlay, FaCode } from "react-icons/fa";

import styles from "./SingleProject.module.scss";

function SingleProject({ id, name, desc, tags, code, demo, image }) {
  return (
    <div key={id} className={styles.singleProject}>
      <div className={styles.projectContent}>
        <h2 id={name.replace(" ", "-").toLowerCase()}>{name}</h2>
        <img src={image} alt={name} />
        <div className={styles.project_showcaseBtn}>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-demo`}
          >
            <FaPlay
              id={`${name.replace(" ", "-").toLowerCase()}-demo`}
              className={styles.icon}
              aria-label="Demo"
            />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-code`}
          >
            <FaCode
              id={`${name.replace(" ", "-").toLowerCase()}-code`}
              className={styles.icon}
              aria-label="Code"
            />
          </a>
        </div>
      </div>
      <p className={styles.project_desc}>{desc}</p>
      <div className={styles.project_lang}>
        {tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default SingleProject;
