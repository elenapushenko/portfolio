import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Skill from "./Skill";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
          <div className={styles.projectsTitle}>
              <h2>Мои работы</h2>
          </div>
          <div className={styles.myProjects}>
              <Project image src=" " title="Project" description="text"/>
              <Project image src=" " title="Project" description="text"/>
          </div>
      </div>
    </div>
  );
}

export default Projects;
