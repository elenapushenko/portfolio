import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.skillsTitle}>
                    <h2>Мои навыки</h2>
                </div>
                <div className={styles.MySkills}>
                    <Skill image src=" " title="React" description="text"/>
                    <Skill image src=" " title="Redux" description="text"/>
                    <Skill image src=" " title="JS" description="text"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
