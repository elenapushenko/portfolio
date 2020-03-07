import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import Titles from "./Titles";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Titles title="Мои навыки"/>
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
