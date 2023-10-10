import React, { useState } from 'react';
import ShowRating from '../../../ServiceDetails/ShowRating/ShowRating';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete, AiTwotoneDelete } from 'react-icons/ai';
import './MyReview.css'
import EditReview from './EditReview/EditReview';
import { Link } from 'react-router-dom';

const MyReview = ({ myReview, myReviews, setMyReviews }) => {

    const { serviceId, serviceName, rating, review } = myReview;

    const reviewParagraphs = review.split('\n\n');

    const [editReview, setEditReview] = useState(false);

    if (editReview) return <EditReview setEditReview={setEditReview} myReview={myReview} myReviews={myReviews} setMyReviews={setMyReviews}></EditReview>

    return (
        <div className='my-review-container'>
            <div className='my-review'>
                <Link className='green-link link-without-underline' to={`/service-details/${serviceId}`}>
                    <h2 style={{ color: 'rgb(1,101,1)' }}>{serviceName}</h2>
                </Link>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#464646' }}>10-01-2021</p>
                    <ShowRating rating={rating} ratingPosition='service-details'></ShowRating>
                </div>
                <div style={{ fontSize: '1.1rem' }}>
                    {
                        reviewParagraphs.map(reviewParagraph => <p key={reviewParagraphs.indexOf(reviewParagraph)}>{reviewParagraph}</p>)
                    }
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <p style={{ color: '#464646' }}>reviewed by you</p>

                    <div className='my-review-icons'>
                        <FaEdit onClick={() => setEditReview(true)} className='my-review-icon edit-icon'></FaEdit>

                        <AiOutlineDelete className='my-review-icon delete-icon'></AiOutlineDelete>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyReview;