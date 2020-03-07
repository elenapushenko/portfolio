import React from 'react';
import styles from './Contacts.module.css';
import Titles from "./Titles";
import Buttons from "./Buttons";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <Titles title="Контакты"/>
        <form className={styles.form}>
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='E-mail'/>
          <textarea className={styles.text} placeholder='Сообщение'></textarea>
        </form>
        <Buttons buttons="отправить"/>
      </div>
    </div>
  );
}

export default Contacts;
