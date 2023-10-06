import React from 'react';
import './ServiceDetails.css';
import { useLoaderData } from 'react-router-dom';
import ShowAllServicesLink from '../shared/ShowAllServicesLink/ShowAllServicesLink';
import ServiceDetailsSection from './ServiceDetailsSection/ServiceDetailsSection';
import RateAndReview from './ServiceDetailsSection/RateAndReview/RateAndReview';
import RatingsAndReviews from './ServiceDetailsSection/RatingsAndReviews/RatingsAndReviews';

const ServiceDetails = () => {

    const service = useLoaderData();

    return (
        <div className='service-details-page'>

            <ServiceDetailsSection service={service}></ServiceDetailsSection>

            <div className='rating-and-review-section'>
                <RateAndReview service={service}></RateAndReview>
                <RatingsAndReviews></RatingsAndReviews>
            </div>

            {/* <ShowAllServicesLink></ShowAllServicesLink> */}
        </div>
    );
};

export default ServiceDetails;