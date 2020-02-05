import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectItem}>
                <div className={styles.image}>
                <img src={props.image} alt=""/>
                </div>
                <div className={styles.button}>
                    <button>смотреть</button>
                </div>
            </div>
            <span>
            <h3>{props.title}</h3>
        </span>
            <div className={styles.projectDescription}>
                {props.description}
            </div>
        </div>
    );
}

export default Project;
