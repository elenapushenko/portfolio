import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Titles from "./Titles";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
          <Titles title="Мои работы"/>
          <div className={styles.myProjects}>
              <Project image src=" " title="Project" description="text"/>
              <Project image src=" " title="Project" description="text"/>
              <Project image src=" " title="Project" description="text"/>
          </div>
      </div>
    </div>
  );
}

export default Projects;
