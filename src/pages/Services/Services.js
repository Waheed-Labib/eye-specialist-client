import React from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import ServicesSection from '../shared/ServicesSection/ServicesSection';

const Services = () => {

    const services = useLoaderData();

    return (
        <ServicesSection services={services}></ServicesSection>
    );
};

export default Services;