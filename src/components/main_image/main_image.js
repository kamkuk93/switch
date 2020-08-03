import React from 'react';
import Image from '../../assets/images/mentor.png'

import styles from './main_image.module.scss';


const MainImage = () => (
    <div className={styles.wrapper}>

        <div className={styles.image}>

            <img src={Image} alt="mentor" className={styles.picture} />

        </div>

    </div>
)

export default MainImage;