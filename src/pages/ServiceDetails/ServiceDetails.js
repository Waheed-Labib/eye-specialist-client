import React from 'react';
import './ServiceDetails.css';
import { useLoaderData } from 'react-router-dom';
import ShowAllServicesLink from '../shared/ShowAllServicesLink/ShowAllServicesLink';
import ServiceDetailsSection from './ServiceDetailsSection/ServiceDetailsSection';


const ServiceDetails = () => {

    const service = useLoaderData();

    return (
        <div>

            <ServiceDetailsSection service={service}></ServiceDetailsSection>

            <div className='service-review-section'>

            </div>

            <ShowAllServicesLink></ShowAllServicesLink>
        </div>
    );
};

export default ServiceDetails;