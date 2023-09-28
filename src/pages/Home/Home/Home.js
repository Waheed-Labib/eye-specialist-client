import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { AuthContext } from '../../../contexts/AuthProvider';
import ServicesSection from '../../shared/ServicesSection/ServicesSection';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='home-page-services'>
                <ServicesSection services={services}></ServicesSection>
                <Link className='show-all-link' to='/services'>
                    <p>Show All Services</p>
                    <FaArrowRight></FaArrowRight>
                </Link>
            </div>

        </div>
    );
};

export default Home;