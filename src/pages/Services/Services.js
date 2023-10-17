import React from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import ServicesSection from '../shared/ServicesSection/ServicesSection';
import AddNewServiceLink from '../shared/AddNewServiceLink/AddNewServiceLink';

const Services = () => {

    const services = useLoaderData();

    return (
        <div>
            <ServicesSection services={services}></ServicesSection>
            <AddNewServiceLink></AddNewServiceLink>
        </div>


    );
};

export default Services;