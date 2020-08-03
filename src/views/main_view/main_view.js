import React from 'react';
import Header from './../../components/header/header'
import Nav from './../../components/nav/nav'
import MainImage from './../../components/main_image/main_image'
import Desc1 from '../../components/desc_1/desc_1'
import Desc2 from './../../components/desc_2/desc_2'
import Desc3 from './../../components/desc_3/desc_3'
import Desc4 from './../../components/desc_4/desc_4'

import styles from './main_view.module.scss';
import ModalMentor from '../../components/modal_mentor/modal_mentor';




class Root extends React.Component {
    state = {
        activeOption: 'desc_1',
        isModalOpen: false,
    }

    zmianaDesc = (type) => {
        this.setState({
            activeOption: type,
        })
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }


    render() {

        // destrukturyzacja - poniżej nie trzeba pisać this.state
        const { isModalOpen } = this.state;

        return (
            <div>

                <div className={styles.components}>

                    <Header openModalFn={this.openModal} />
                    <Nav zmianaDescFn={this.zmianaDesc} />


                    {this.state.activeOption === 'desc_1' ? <Desc1 /> : null}
                    {this.state.activeOption === 'desc_2' ? <Desc2 /> : null}
                    {this.state.activeOption === 'desc_3' ? <Desc3 /> : null}
                    {this.state.activeOption === 'desc_4' ? <Desc4 /> : null}


                </div>

                {isModalOpen && <ModalMentor closeModalFn={this.closeModal} />}

                <MainImage />

                {/* tło */}
                <div className={styles.wrapper}>
                    <div className={styles.background}></div>
                </div>



            </div>

        )
    }


}

export default Root;
