import React from 'react';
import { Link } from 'react-router-dom';
import styles from './desc_4.module.scss';


const Description = () => (
    <div className={styles.wrapper}>

        <div className={styles.des}>

            <h1>Opinie użytkowników
naszego serwisu</h1>

            <div className={styles.line}></div>
            <div className={styles.dot}></div>

            <p>Poznaj opinie użytkowników naszego serwisu. Przeczytaj co sądzą osoby, które nauczyły się programować i dowiedz się jak oceniają naukę pod okiem mentora. </p>

            <Link to="/mentors">
                <button className={styles.button}>Dostępni mentorzy</button>
            </Link>

        </div>


    </div >
)

export default Description;