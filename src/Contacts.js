import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Контакты</h3>
        </div>
        <form className={styles.form}>
          <input/>
          <input/>
          <textarea className={styles.text}></textarea>
        </form>
        <div className={styles.button}>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
