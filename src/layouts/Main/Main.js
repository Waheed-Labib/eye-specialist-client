import React from 'react';
import './Main.css'
import Header from '../../pages/shared/Header/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';
import AppointmentButton from '../../pages/shared/Buttons/AppointmentButton/AppointmentButton';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <AppointmentButton></AppointmentButton>
        </div>
    );
};

export default Main;