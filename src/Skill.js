import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
  return (
    <div className={styles.skill}>
        <div className={styles.skillItem}>
            <img  className={styles.image} src={props.image} alt=""/>
        </div>
        <span>
            <h3>{props.title}</h3>
        </span>
        <div className={styles.skillDescription}>
            {props.description}
        </div>
    </div>
  );
}

export default Skill;
