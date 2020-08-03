import React from 'react';
import Card from '../card/card';
import styles from './results.module.scss';
import { mentorAccounts } from '../../data/mentorAccounts';



class Mentors extends React.Component {



    render() {

        return (
            <div className={styles.wrapper}>

                {mentorAccounts.map(item => (
                    <Card {...item} />
                ))}

                {/* <Card
                    ocena={mentorAccounts[0].ocena}
                    cena={mentorAccounts[0].cena}
                    image={mentorAccounts[0].image}
                    name={mentorAccounts[0].name}
                    field={mentorAccounts[0].field}
                    skils={mentorAccounts[0].skils}
                /> */}



            </div>

        )
    }


}

export default Mentors;
