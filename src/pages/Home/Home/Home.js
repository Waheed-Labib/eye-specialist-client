import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { AuthContext } from '../../../contexts/AuthProvider';
import ServicesSection from '../../shared/ServicesSection/ServicesSection';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Loading from '../../shared/Loading/Loading';
import ShowAllServicesLink from '../../shared/ShowAllServicesLink/ShowAllServicesLink';
import toast from 'react-hot-toast';

const Home = () => {

    const [services, setServices] = useState([]);

    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        fetch('https://eye-specialist-server.vercel.app/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(() => setDataNotFound(true))
    }, [])

    return (
        <div>
            <div className='home-page-services'>
                <ServicesSection services={services} dataNotFound={dataNotFound}></ServicesSection>
                <ShowAllServicesLink></ShowAllServicesLink>
            </div>

        </div>
    );
};

export default Home;