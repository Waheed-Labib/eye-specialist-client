import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa6';
import logo from '../../../assets/images/logo/green logo.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='footer'>
            <div className='footer-info'>

                <div className='footer-column'>
                    <p className='green-footer-heading'>
                        Dr. Bean Eye Consultation Center
                    </p>


                    <div>
                        <p>40 King Street, Unit 1</p>
                        <p>Auzburn NH 0506</p>
                    </div>

                    <div>
                        T (506) 232-4345
                    </div>

                    <Link className='dark-link'>
                        <p>Send A Message</p>
                    </Link>
                </div>

                <div className='footer-column'>
                    <p className='green-footer-heading'>
                        Connect
                    </p>

                    <div>
                        <Link className='dark-link'>
                            <p>LinkedIn</p>
                        </Link>

                        <Link className='dark-link'>
                            <p>Instagram</p>
                        </Link>

                        <Link className='dark-link'>
                            <p>Facebook</p>
                        </Link>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '150px', height: '75px' }} src={logo} alt=''></img>
                </div>

            </div>

            <div className='copyright-section'>

                <small>
                    {currentYear} All Rights Reserved. Designed by <Link className='green-link'>LabibWahid & co.</Link> ©
                </small>
                <br></br>
                <small>
                    If you are using a screen reader and are having problems, please call <Link className='green-link'>787 481 2158</Link>
                </small>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={scrollToTop} className='back-to-top-btn'>
                    <p>BACK TO TOP</p>
                    <FaArrowUp></FaArrowUp>
                </button>
            </div>

        </div>

    );
};

export default Footer;