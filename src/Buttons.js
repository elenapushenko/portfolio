import React from 'react';
import styles from './Buttons.module.css';


function Buttons(props) {
  return (
        <div className={styles.button}>
          <button className={styles.button}>{props.buttons}</button>
        </div>
  );
}

export default Buttons;
