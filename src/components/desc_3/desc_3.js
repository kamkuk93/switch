import React from 'react';
import { Link } from 'react-router-dom';
import styles from './desc_3.module.scss';


const Description = () => (
    <div className={styles.wrapper}>

        <div className={styles.des}>

            <h1>Popularne technologie
na rynku pracy</h1>

            <div className={styles.line}></div>
            <div className={styles.dot}></div>

            <p>Wybierz technologie, których chcesz się nauczyć i skontaktuj się z mentorem. Przeprowadzi Cię on przez proces zdobywania nowej umiejętności oraz przedstawi praktyczne wskazówki w nauce.</p>

            <Link to="/mentors">
                <button className={styles.button}>Dostępni mentorzy</button>
            </Link>

        </div>


    </div >
)

export default Description;