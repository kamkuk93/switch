import React from 'react';
import { Link } from 'react-router-dom';
import styles from './desc_1.module.scss';


const Description = () => (
    <div className={styles.wrapper}>

        <div className={styles.des}>

            <h1>Rozwijaj umiejętności<br />
                z profesjonalistami</h1>

            <div className={styles.line}></div>
            <div className={styles.dot}></div>

            <p>Poznaj nowe języki programowania w praktyczny sposób. Realizuj projekty na każdym poniomie zaawansowania podczas współpracy
            z mentorem.</p>

            <Link to="/mentors">
                <button className={styles.button}>Dostępni mentorzy</button>
            </Link>

        </div>


    </div >
)

export default Description;