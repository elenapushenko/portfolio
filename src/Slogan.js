import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3 className={styles.ttl}>Рассматриваю варианты удаленной работы</h3>
        </div>
        <div className={styles.button}>
          <button>Нанять меня</button>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
