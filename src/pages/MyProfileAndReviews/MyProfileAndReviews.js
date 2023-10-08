import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProfileAndReviews = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className='section'>
                <h1 className='section-heading'>My Profile</h1>
            </div>
        </div>
    );
};

export default MyProfileAndReviews;