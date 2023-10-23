import React, { useEffect, useState } from 'react';
import './Services.css';
import ServicesSection from '../shared/ServicesSection/ServicesSection';
import AddNewServiceLink from '../shared/AddNewServiceLink/AddNewServiceLink';
import ServicesPagination from './ServicesPagination/ServicesPagination';
import useTitle from '../../hooks/useTitle';

const Services = () => {

    useTitle(`Services`)

    const [serviceLoading, setServiceLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [servicesCount, setServicesCount] = useState(0);
    const [dataNotFound, setDataNotFound] = useState(false);

    const [page, setPage] = useState(1);

    useEffect(() => {
        setServiceLoading(true);

        fetch(`https://eye-specialist-server.vercel.app/services?page=${page - 1}&size=6`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setServicesCount(data.count)
                setServiceLoading(false)
            })
            .catch(() => {
                setDataNotFound(true)
                setServiceLoading(false)
            })
    }, [page])

    return (
        <div>
            <ServicesSection services={services} serviceLoading={serviceLoading} dataNotFound={dataNotFound}></ServicesSection>
            <ServicesPagination page={page} setPage={setPage} dataCount={servicesCount}></ServicesPagination>
            <AddNewServiceLink></AddNewServiceLink>
        </div>


    );
};

export default Services;