import React from 'react';
import { Link } from 'react-router-dom';
import styles from './desc_2.module.scss';


const Description = () => (
    <div className={styles.wrapper}>

        <div className={styles.des}>

            <h1>Mentorzy z najlepszymi
ocenami i opiniami</h1>

            <div className={styles.line}></div>
            <div className={styles.dot}></div>

            <p>Mentorzy z którymi współpracujemy przechodzą przez specjalny proces weryfikacji. Możesz mieć pewność, że kontaktujesz się z doświadczonym programistą.</p>

            <Link to="/mentors">
                <button className={styles.button}>Dostępni mentorzy</button>
            </Link>

        </div>


    </div >
)

export default Description;