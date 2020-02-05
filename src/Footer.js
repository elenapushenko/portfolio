import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}>Пушенко Елена</div>
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
              Все права защищены
          </div>
      </div>
    </div>
  );
}

export default Footer;
