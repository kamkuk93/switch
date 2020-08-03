import React from 'react';
import styles from './nav.module.scss';
// import Button from '../button/button'


const Nav = ({ zmianaDescFn }) => (
    <div className={styles.wrapper}>



        <button className={styles.button} onClick={() => zmianaDescFn('desc_1')}>Switch</button>
        <button className={styles.button} onClick={() => zmianaDescFn('desc_2')}>Mentorzy</button>
        <button className={styles.button} onClick={() => zmianaDescFn('desc_3')}>Technologie</button>
        <button className={styles.button} onClick={() => zmianaDescFn('desc_4')}>Opinie</button>



        {/* <div className={styles.nav}>
            <Button secondary > Switch </Button>
        </div>

        <div className={styles.nav}>
            <Button secondary > Mentorzy </Button>
        </div>

        <div className={styles.nav}>
            <Button secondary> Technologie </Button>
        </div>

        <div className={styles.nav}>
            <Button secondary> Opinie </Button>
        </div> */}




        {/* <div className={styles.nav}>
            <Button secondary> Switch </Button>
        </div>

        <div className={styles.nav}>
            <Button secondary> Mentorzy </Button>
        </div>

        <div className={styles.nav}>
            <Button secondary> Technologie </Button>
        </div>

        <div className={styles.nav}>
            <Button secondary> Opinie </Button>
        </div> */}

    </div >
)

export default Nav;