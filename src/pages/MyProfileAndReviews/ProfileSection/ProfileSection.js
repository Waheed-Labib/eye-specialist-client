import React, { useContext } from 'react';
import { FaEdit, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import './ProfileSection.css'

const ProfileSection = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='section profile-section'>
            <h1 style={{ marginBottom: '10%' }} className='section-heading'>
                <FaUser></FaUser>
                &nbsp;
                My Profile
            </h1>

            <div className='profile-div'>
                <p>Name : </p>
                <h3>{user?.displayName}</h3>
                <div style={{ color: 'rgb(1,101,1)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <p>edit</p>
                    <FaEdit></FaEdit>
                </div>

            </div>
            <hr></hr>
            <div className='profile-div'>
                <p>Photo : </p>
                {
                    user?.photoURL ?
                        <img src={user?.photoURL} alt=''></img>
                        :
                        <FaUser></FaUser>
                }

                <div style={{ color: 'rgb(1,101,1)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <p>edit</p>
                    <FaEdit ></FaEdit>
                </div>
            </div>
            <hr></hr>
            <div className='profile-div'>
                <p>Email : </p>
                <h3 className='email'>{user?.email}</h3>
                <p style={{ color: 'rgb(1,101,1)', textDecoration: 'underline' }}>Verify Email</p>
            </div>
        </div>
    );
};

export default ProfileSection;