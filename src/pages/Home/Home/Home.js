import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { AuthContext } from '../../../contexts/AuthProvider';
import ServicesSection from '../../shared/ServicesSection/ServicesSection';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Loading from '../../shared/Loading/Loading';
import ShowAllServicesLink from '../../shared/ShowAllServicesLink/ShowAllServicesLink';
import toast from 'react-hot-toast';
import PatientCount from './PatientCount/PatientCount';

const Home = () => {

    const [services, setServices] = useState([]);

    const [serviceLoading, setServiceLoading] = useState(false)
    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        setServiceLoading(true);

        fetch('https://eye-specialist-server.vercel.app/services?limit=3')
            .then(res => res.json())
            .then(data => {
                setServices(data)
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
        </div>
    );
};

export default Home;