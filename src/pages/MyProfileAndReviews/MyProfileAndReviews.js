import React from 'react';
import './MyProfileAndReviews.css'
import ProfileSection from './ProfileSection/ProfileSection';
import MyReviews from './MyReviews/MyReviews';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const MyProfileAndReviews = () => {

    useTitle('My Reviews & Profile')

    return (
        <div className='my-reviews-and-profile-page-container'>
            <div className='my-reviews-and-profile-page'>
                <ProfileSection></ProfileSection>
                <MyReviews></MyReviews>
                <Link style={{ marginTop: '10%', marginBottom: '5%' }} className='show-all-services-link' to='/services'>
                    <p>Show All Services</p>
                    <FaArrowRight></FaArrowRight>
                </Link>
            </div>
        </div>

    );
};

export default MyProfileAndReviews;