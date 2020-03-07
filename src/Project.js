import React from 'react';
import styles from './Project.module.css';
import Buttons from "./Buttons";

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectItem}>
                <div className={styles.image}>
                <img src={props.image} alt=""/>
                </div>
                <div className={styles.button}>
                   <Buttons buttons="смотреть"/>
                </div>
            </div>
            <div className={styles.projectTitle}>
            <h3>{props.title}</h3>
        </div>
            <div className={styles.projectDescription}>
                {props.description}
            </div>
        </div>
    );
}

export default Project;
