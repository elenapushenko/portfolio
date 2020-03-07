import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Здравствуйте!</span>
                    <span>Я Елена <span>Пушенко</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image} src=''/>
                </div>
            </div>
        </div>
    );
}

export default Main;
