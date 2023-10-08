import React, { useEffect, useState } from 'react';
import './RatingsAndReviews.css'
import Review from './Review/Review';

const RatingsAndReviews = ({ service, reviews, setReviews }) => {

    useEffect(() => {
        fetch(`https://eye-specialist-server.vercel.app/reviews/${service?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service?._id, setReviews])

    return (
        <div className='section ratings-and-reviews-section'>
            <h1 style={{ marginBottom: '5%' }} className='section-heading'>Ratings and Reviews</h1>

            <div style={{ display: 'flex', gap: '5%', flexWrap: 'wrap' }}>
                {
                    reviews.map(review => <Review key={review._id} review={review} index={reviews.indexOf(review)}></Review>)
                }
            </div>

        </div>
    );
};

export default RatingsAndReviews;