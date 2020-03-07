import React from 'react';
import styles from './Titles.module.css';

function Titles(props) {
    return (
                <div className={styles.titles}>
                    <h2 className={styles.titles}>{props.title}</h2>
                    <div className={styles.line}></div>
                </div>
    );
}

export default Titles;
