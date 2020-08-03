import React from 'react';
import styles from './header.module.scss';
import logoImage from './../../assets/images/logo.png'
import Button from '../button/button'


const Header = ({ openModalFn }) => (
    <div className={styles.wrapper}>

        <div className={styles.div_logo}>
            <img src={logoImage} alt="logo" />
        </div>

        <div className={styles.div_zostan_mentorem}>
            <Button onClick={openModalFn} secondary> Zostań mentorem </Button>
        </div>

        <div className={styles.div_zaloguj_sie}>
            <Button> Zaloguj się </Button>
        </div>

    </div>
)

export default Header;