import React from 'react';
import Header from './../../components/header/header';
import Filters from './../../components/filters/filters';
import Results from './../../components/results/results';

import styles from './mentors_view.module.scss';




class Mentors extends React.Component {



    render() {
        return (
            <div>
                <div className={styles.sticky}>
                    <div className={styles.components}>
                        <Header />
                        <Filters />
                    </div>
                </div>

                < Results />



                {/* tło */}
                {/* <div className={styles.wrapper}>
                    <div className={styles.background}></div>
                </div> */}

            </div>

        )
    }


}

export default Mentors;
