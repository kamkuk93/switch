import React from 'react';
import styles from './button.module.scss';

const Button = ({ children, secondary, ...props }) => {

    //warunek, że jak button ma props seconsary to przypisujemy style z klasy secondary
    const buttonClass = secondary ? styles.secondary : styles.button

    return (

        <button className={buttonClass} {...props}>

            {children}

        </button>

    )
}



export default Button;