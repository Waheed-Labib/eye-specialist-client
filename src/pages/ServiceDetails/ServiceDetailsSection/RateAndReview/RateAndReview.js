import React, { useContext } from 'react';
import './RateAndReview.css'
import { FaRegStar } from 'react-icons/fa';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const RateAndReview = ({ service }) => {

    const { user } = useContext(AuthContext);

    return (
        <div className='section'>
            <h1 style={{ marginBottom: '5%' }} className='section-heading'>Rate and Review</h1>
            <div className='rate-and-review-div'>
                <div style={{ paddingLeft: '16px', paddingTop: '8px' }}>
                    <h3>Have you experienced {service?.name} treatment from Dr. Bean?</h3>
                    <p>You can rate him and add a review.</p>
                </div>

                <div className='rate-and-review-box'>

                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', color: 'rgb(1,101,1)' }}>
                        {
                            user ?
                                <>
                                    <img style={{ height: '45px', width: '45px' }} src={user?.photoURL} alt=''></img>
                                    <h4 style={{ fontSize: '1.25rem' }}>{user?.displayName}</h4>
                                </>
                                :
                                <p style={{ color: '#464646' }}>You have to <Link to='/signin' className='green-link' style={{ fontSize: '1.2rem', fontWeight: '500' }}>Sign in</Link> first.</p>
                        }
                    </div>

                    <div style={{ width: '50%', display: 'flex', justifyContent: 'end' }}>
                        <div className='rating-stars'>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                        </div>
                    </div>

                    <textarea style={{ width: '100%' }} className='review-input' name='review' placeholder='How was your experience? (optional)'></textarea>

                </div>
            </div>
        </div>
    );
};

export default RateAndReview;