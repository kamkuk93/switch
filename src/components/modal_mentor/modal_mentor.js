import React from 'react';
import Form from '../../components/form/form';
import styles from '../modal_mentor/modal_mentor.module.scss';

const ModalMentor = ({ closeModalFn }) => (

    < div className={styles.wrapper} >

        <button className={styles.closeButton} onClick={closeModalFn}></button>
        <p className={styles.title}>Zarejestruj</p>

        <Form />


    </div >
)

export default ModalMentor;