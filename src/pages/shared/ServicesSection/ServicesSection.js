import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './ServicesSection.css'

const ServicesSection = ({ services }) => {
    return (
        <div className='section services-section'>
            <h1 className='section-heading'>Services</h1>

            <div className='services'>
                {
                    services.map(service => <ServiceCard id={service?.id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default ServicesSection;