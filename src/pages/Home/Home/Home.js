import React, { useEffect, useState } from 'react';
import './Home.css'
import ServicesSection from '../../shared/ServicesSection/ServicesSection';
import ShowAllServicesLink from '../../shared/ShowAllServicesLink/ShowAllServicesLink';
import PatientCount from './PatientCount/PatientCount';
import OldPeople from '../OldPeople/OldPeople';
import Discount from '../Discount/Discount';

const Home = () => {

    const [services, setServices] = useState([]);

    const [serviceLoading, setServiceLoading] = useState(false)
    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        setServiceLoading(true);

        fetch('https://eye-specialist-server.vercel.app/services?page=0&size=3')
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

            <div className='home-page-services'>
                <ServicesSection services={services} serviceLoading={serviceLoading} dataNotFound={dataNotFound}></ServicesSection>
                <ShowAllServicesLink></ShowAllServicesLink>
            </div>

            <PatientCount></PatientCount>

            <div className='home-page-sections'>
                <Discount></Discount>
                <OldPeople></OldPeople>
            </div>

        </div>
    );
};

export default Home;