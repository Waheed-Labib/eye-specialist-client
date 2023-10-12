import React from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import ServicesSection from '../shared/ServicesSection/ServicesSection';
import Loading from '../shared/Loading/Loading';
import AddNewServiceLink from '../shared/AddNewServiceLink/AddNewServiceLink';

const Services = () => {

    const services = useLoaderData();

    if (!services) return <Loading></Loading>

    return (
        <div>
            <ServicesSection services={services}></ServicesSection>
            <AddNewServiceLink></AddNewServiceLink>
        </div>


    );
};

export default Services;