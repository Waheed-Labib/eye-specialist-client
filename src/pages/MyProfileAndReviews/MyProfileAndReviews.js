import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import './MyProfileAndReviews.css'
import ProfileSection from './ProfileSection/ProfileSection';
import MyReviews from './MyReviews/MyReviews';

const MyProfileAndReviews = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='my-reviews-and-profile-page-container'>
            <div className='my-reviews-and-profile-page'>
                <ProfileSection></ProfileSection>
                <MyReviews></MyReviews>
            </div>
        </div>

    );
};

export default MyProfileAndReviews;