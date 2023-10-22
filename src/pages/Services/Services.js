import React, { useEffect, useState } from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import ServicesSection from '../shared/ServicesSection/ServicesSection';
import AddNewServiceLink from '../shared/AddNewServiceLink/AddNewServiceLink';
import ServicesPagination from './ServicesPagination/ServicesPagination';

const Services = () => {

    const [serviceLoading, setServiceLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [dataNotFound, setDataNotFound] = useState(false)

    useEffect(() => {
        setServiceLoading(true);

        fetch('https://eye-specialist-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setServiceLoading(false)
            })
            .catch(() => {
                setDataNotFound(true)
                setServiceLoading(false)
            })
    }, [])

    return (
        <div>
            <ServicesSection services={services} serviceLoading={serviceLoading} dataNotFound={dataNotFound}></ServicesSection>
            <ServicesPagination></ServicesPagination>
            <AddNewServiceLink></AddNewServiceLink>
        </div>


    );
};

export default Services;