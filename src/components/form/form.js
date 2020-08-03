import React from 'react';
import styles from '../form/form.module.scss';

const Form = () => (

    <>

        <form className={styles.wrapper}>
            <input type="text" placeholder="Email" name="email" className={styles.imput} />
            <input type="password" placeholder="Hasło" name="haslo" className={styles.imput} />
            <input type="password" placeholder="Powórz hasło" name="repeadhaslo" className={styles.imput} />
            <button type="submit" className={styles.button}>Zarejestruj</button>
        </form>
    </>

)

export default Form;