import React, { useEffect, useState } from 'react';
import './ServiceDetails.css';
import { Link, useLocation } from 'react-router-dom';
import ServiceDetailsSection from './ServiceDetailsSection/ServiceDetailsSection';
import RateAndReview from './ServiceDetailsSection/RateAndReview/RateAndReview';
import RatingsAndReviews from './ServiceDetailsSection/RatingsAndReviews/RatingsAndReviews';
import { FaArrowRight } from 'react-icons/fa';
import Loading from '../shared/Loading/Loading';
import CheckYourInternetConnection from '../CheckYourInternertConnection/CheckYourInternetConnection';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {

    const [service, setService] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [dataNotFound, setDataNotFound] = useState(false);

    useTitle(`${service?.name} Service Details`)

    const location = useLocation();
    const serviceId = location.pathname.split('/')[2];

    useEffect(() => {
        fetch(`https://eye-specialist-server.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
            .catch(() => setDataNotFound(true))
    }, [serviceId])

    if (dataNotFound) return <CheckYourInternetConnection></CheckYourInternetConnection>
    if (!service) return <Loading></Loading>

    return (
        <div className='service-details-page'>

            <ServiceDetailsSection service={service}></ServiceDetailsSection>

            <div className='rating-and-review-section'>
                <RateAndReview
                    service={service}
                    reviews={reviews}
                    setReviews={setReviews}
                ></RateAndReview>

                <RatingsAndReviews
                    service={service}
                    reviews={reviews}
                    setReviews={setReviews}></RatingsAndReviews>
            </div>

            <Link className='show-all-services-link' to='/services'>
                <p>Show All Services</p>
                <FaArrowRight></FaArrowRight>
            </Link>
        </div>
    );
};

export default ServiceDetails;