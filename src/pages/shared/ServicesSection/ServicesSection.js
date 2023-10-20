import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './ServicesSection.css'
import Loading from '../Loading/Loading';
import { useInView } from 'react-intersection-observer';

const ServicesSection = ({ services, dataNotFound, serviceLoading }) => {

    const { ref, inView } = useInView({
        threshold: 0
    });

    return (
        <div inView={inView}>
            <div ref={ref} className='section services-section'>
                <h1 className='section-heading'>Services</h1>

                {
                    serviceLoading ?
                        <Loading></Loading>
                        :
                        <>
                            {
                                dataNotFound ?
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%' }}>
                                        < p style={{ fontSize: '2rem', fontStyle: 'italic', color: 'maroon' }}>Please Check Your Internet Connection</p>
                                    </div>
                                    :
                                    <>
                                        {
                                            inView && <div className='services'>
                                                {

                                                    services.map(service => <ServiceCard key={service?._id} service={service}></ServiceCard>)
                                                }
                                            </div>
                                        }
                                    </>

                            }

                        </>
                }
            </div>
        </div>
    );
};

export default ServicesSection;