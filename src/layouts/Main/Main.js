import React from 'react';
import './Main.css'
import Header from '../../pages/shared/Header/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';
import AppointmentButton from '../../pages/shared/Buttons/AppointmentButton/AppointmentButton';

const Main = () => {

    return (
        <div className='main'>
            <div className='main-body'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <AppointmentButton></AppointmentButton>
        </div>
    );
};

export default Main;