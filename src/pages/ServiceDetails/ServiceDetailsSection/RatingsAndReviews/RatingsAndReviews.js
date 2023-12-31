import React, { useEffect } from 'react';
import './RatingsAndReviews.css'
import Review from './Review/Review';

const RatingsAndReviews = ({ service, reviews, setReviews }) => {

    useEffect(() => {
        fetch(`https://eye-specialist-server.vercel.app/reviews/${service?._id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [service?._id, setReviews])

    return (
        <div className='section ratings-and-reviews-section'>
            <h1 className='section-heading'>Ratings and Reviews</h1>

            <div className='sort-by'>
                <p>
                    <small>Sorted by :</small>
                </p>

                <p style={{ padding: '5px', borderRadius: '2px', backgroundColor: 'rgb(220,220,220)' }}>
                    <small>Newest first</small>
                </p>
            </div>

            {
                reviews.length ?
                    <div style={{ display: 'flex', gap: '5%', flexWrap: 'wrap' }}>
                        {
                            reviews.map(review => <Review key={review._id} review={review} index={reviews.indexOf(review)}></Review>)
                        }
                    </div>
                    :
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%' }}>
                        <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>No Reviews were added to this service ..</p>
                    </div>
            }


        </div>
    );
};

export default RatingsAndReviews;