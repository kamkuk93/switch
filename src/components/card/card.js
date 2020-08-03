import React from 'react';

import styles from './card.module.scss';




class Card extends React.Component {



    render() {
        return (
            <>

                <div className={styles.wrapper}>

                    <div className={styles.cardHeader}>
                        <p className={styles.ocena}> {this.props.ocena} </p>
                        <p className={styles.cena}>{this.props.cena} </p>
                    </div>
                    <div className={styles.profilImage}>
                        <img src={this.props.image} alt="profil" className={styles.profilPhoto} />


                    </div>
                    <div className={styles.name}>
                        <p className={styles.nameSurname}>{this.props.name}</p>
                    </div>
                    <div className={styles.line}>
                        <p className={styles.field}>{this.props.field}</p>
                    </div>
                    <div className={styles.skils}>

                        {this.props.skils.map((skil) => <p className={styles.skil}>{skil}</p>)}
                        {/* 
                        <p className={styles.skil}>.java script</p>
                        <p className={styles.skil}>.css</p>
                        <p className={styles.skil}>.html</p>
                        <p className={styles.skil}>.nauka od zera</p> */}
                    </div>

                </div>

            </>
        )
    }


}

export default Card;