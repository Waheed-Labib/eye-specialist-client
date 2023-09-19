import React, { useState } from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';

const Header = () => {

    return (
        <div style={{ position: 'relative' }}>
            <NavBar></NavBar>
            <Banner></Banner>
        </div >
    );
};

export default Header;