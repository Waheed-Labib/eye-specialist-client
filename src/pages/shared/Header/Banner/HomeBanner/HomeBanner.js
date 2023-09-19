import React from 'react';
import './HomeBanner.css'
import { FaArrowRight } from 'react-icons/fa';
import drBean from '../../../../../assets/images/banner/dr-bean.png'
import drInfo from '../../../../../assets/images/banner/doctor-info.png'

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <div>
                <div className='first-sentence'>
                    <FaArrowRight className='home-banner-arrow'></FaArrowRight>
                    <h1 className='dark-grey-text'>The</h1>
                    <h1 className='dark-green-text'>BEST</h1>
                </div>
                <div className='second-sentence'>
                    <h1 className='dark-green-text'>CARE</h1>
                </div>

                <div className='third-sentence'>
                    <h1 className='dark-grey-text'>FOR</h1>
                    <img className='d-sm-none dr-img' src={drBean} alt=''></img>
                    <div className='third-sentence-last-portion'>
                        <img className='d-sm-none dr-info-img' src={drInfo} alt=''></img>
                        <h1 className='dark-green-text'>YOUR EYES</h1>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <img className='d-md-none dr-info-img' src={drInfo} alt=''></img>
                        <img style={{ marginBottom: '30px' }} className='d-md-none dr-img' src={drBean} alt=''></img>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeBanner;