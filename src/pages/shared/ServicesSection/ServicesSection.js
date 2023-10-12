import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './ServicesSection.css'

const ServicesSection = ({ services, dataNotFound }) => {

    return (
        <div className='section services-section'>
            <h1 className='section-heading'>Services</h1>

            {
                dataNotFound ?
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%' }}>
                        < p style={{ fontSize: '2rem', fontStyle: 'italic', color: 'maroon' }}>Please Check Your Internet Connection</p>
                    </div>
                    :
                    <div className='services'>
                        {

                            services.map(service => <ServiceCard key={service?.id} service={service}></ServiceCard>)
                        }
                    </div>
            }


        </div>
    );
};

export default ServicesSection;