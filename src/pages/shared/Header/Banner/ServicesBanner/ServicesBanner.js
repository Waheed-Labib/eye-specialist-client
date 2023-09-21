import React from 'react';
import './ServicesBanner.css'
import servicesQuote from '../../../../../assets/images/banner/services/services-quote.png'
import servicesDoctor from '../../../../../assets/images/banner/services/services-doctor.png'

const ServicesBanner = () => {
    return (
        <div className='services-banner'>
            <img className='services-doctor' src={servicesDoctor} alt=''></img>
            <img className='services-quote' src={servicesQuote} alt=''></img>
        </div>
    );
};

export default ServicesBanner;