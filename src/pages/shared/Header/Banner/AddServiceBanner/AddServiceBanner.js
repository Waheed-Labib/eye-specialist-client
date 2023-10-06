import React from 'react';
import './AddServiceBanner.css'
import { FaArrowCircleRight } from 'react-icons/fa';

const AddServiceBanner = () => {

    return (
        <div className='add-service-banner-container'>
            <div className='add-service-banner'>
                <h1 onClick={() => window.scrollTo(0, 600)}>
                    ADD A SERVICE FROM HERE
                    <FaArrowCircleRight className='add-service-arrow' />
                </h1>
            </div>
        </div>

    );
};

export default AddServiceBanner;