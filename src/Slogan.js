import React from 'react';
import styles from './Slogan.module.css';
import Titles from "./Titles";
import Buttons from "./Buttons";

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <Titles title="Рассматриваю варианты удаленной работы"/>
          <Buttons buttons="Нанять меня"/>
      </div>
    </div>
  );
}

export default Slogan;
