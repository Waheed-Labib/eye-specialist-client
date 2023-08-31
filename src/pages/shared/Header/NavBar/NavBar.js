import React, { useState } from 'react';
import './NavBar.css'
import greyLogo from '../../../../assets/images/logo/logo.png'
import greenLogo from '../../../../assets/images/logo/green logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [logo, setLogo] = useState('greyLogo')

    return (
        <div>
            {/* logo */}
            <Link to='/'>
                <img
                    onMouseOver={() => setLogo('greenLogo')}
                    className={`logo ${logo === 'greenLogo' && 'd-none'}`} src={greyLogo} alt=''></img>
            </Link>


            {/* green logo */}
            <Link to='/'>
                <img
                    onMouseLeave={() => setLogo('logo')}
                    className={`logo ${logo !== 'greenLogo' && 'd-none'}`} src={greenLogo} alt=''></img>
            </Link>



        </div>
    );
};

export default NavBar;