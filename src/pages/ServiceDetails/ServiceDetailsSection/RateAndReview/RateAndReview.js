import React, { useContext, useState } from 'react';
import './RateAndReview.css';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';
import ReviewModal from './ReviewModal/ReviewModal';
import RatingStars from './RatingStars/RatingStars';

const RateAndReview = ({ service, reviews, setReviews }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    const [selectedStar, setSelectedStar] = useState(null);
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [navigateToLogin, setNavigateToLogin] = useState(false);

    const handleAddReview = () => {
        // if login, show review modal
        if (user) setReviewModalOpen(true)

        // else, navigate to login page
        else setNavigateToLogin(true)
    }

    if (navigateToLogin) return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

    return (
        <div className='section rate-and-review-section'>
            <h1 style={{ marginBottom: '5%' }} className='section-heading'>Rate and Review</h1>
            <div className='rate-and-review-div'>
                <div style={{ paddingLeft: '16px', paddingTop: '8px' }}>

                    <h3>Have you experienced {service?.name} treatment from Dr. Bean?</h3>
                    <p>You can rate him and add a review.</p>


                </div>

                <div className='rate-and-review-box'>

                    <div className='user-profile-link'>

                        {
                            user ?
                                <Link
                                    to='/my-profile-and-reviews'
                                    style={{ display: 'flex', alignItems: 'center', gap: '1%', margin: '0', padding: '0' }}
                                    className='green-link link-without-underline'>
                                    <img style={{ height: '45px', width: '45px' }} src={user?.photoURL} alt=''></img>
                                    <h4 style={{ fontSize: '1.25rem' }}>{user?.displayName}</h4>
                                </Link>
                                :
                                <p style={{ color: '#464646' }}>You have to <Link onClick={handleAddReview} className='green-link' style={{ fontSize: '1.2rem', fontWeight: '500' }}>Sign in</Link> first.</p>
                        }
                    </div>

                    <div onClick={handleAddReview} style={{ display: 'flex', justifyContent: 'end' }}>
                        <RatingStars
                            selectedStar={selectedStar}
                            setSelectedStar={setSelectedStar}
                        ></RatingStars>
                    </div>

                    <textarea onClick={handleAddReview} style={{ width: '100%' }} className='review-input' name='review' placeholder='How was your experience? (optional)'></textarea>



                </div>

            </div>

            <ReviewModal
                service={service}
                reviewModalOpen={reviewModalOpen}
                setReviewModalOpen={setReviewModalOpen}
                selectedStar={selectedStar}
                setSelectedStar={setSelectedStar}
                reviews={reviews}
                setReviews={setReviews}
            ></ReviewModal>
        </div>
    );
};

export default RateAndReview;