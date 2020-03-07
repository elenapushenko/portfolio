import React from 'react';
import styles from './Footer.module.css';
import Titles from "./Titles";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
          <Titles title="Пушенко Елена"/>
          <div className={styles.image}>
          <div className={styles.imgItem}>
              <img src="" alt=""/>
          </div>
          <div className={styles.imgItem}>
              <img src="" alt=""/>
          </div>
          <div className={styles.imgItem}>
              <img src="" alt=""/>
          </div>
          <div className={styles.imgItem}>
              <img src="" alt=""/>
          </div>
          </div>
          <div className={styles.copyRight}>
              Copyright © 2020 Все права защищены
          </div>
      </div>
    </div>
  );
}

export default Footer;
