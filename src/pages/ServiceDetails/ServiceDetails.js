import React, { useState } from 'react';
import './ServiceDetails.css';
import { Link, useLoaderData } from 'react-router-dom';
import ShowAllServicesLink from '../shared/ShowAllServicesLink/ShowAllServicesLink';
import ServiceDetailsSection from './ServiceDetailsSection/ServiceDetailsSection';
import RateAndReview from './ServiceDetailsSection/RateAndReview/RateAndReview';
import RatingsAndReviews from './ServiceDetailsSection/RatingsAndReviews/RatingsAndReviews';
import { FaArrowRight } from 'react-icons/fa';

const ServiceDetails = () => {

    const service = useLoaderData();
    const [reviews, setReviews] = useState([])

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