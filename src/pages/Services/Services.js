import React from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard/ServiceCard';

const Services = () => {

    const services = useLoaderData();

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

export default Services;