import React, { useContext, useState } from 'react';
import { FaEdit, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import './ProfileSection.css';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import toast from 'react-hot-toast';

const ProfileSection = () => {

    const { user, verifyEmail } = useContext(AuthContext)
    console.log(user?.photoURL)

    const [editUserProfile, setEditUserProfile] = useState(false);

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => {
                alert('Please check your Email')
            })
            .catch(() => {
                toast.error('Something Went Wrong')
            })
    }

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
                <div className='cursor-pointer-underline-on-hover' onClick={() => setEditUserProfile(true)} style={{ color: 'rgb(1,101,1)', display: 'flex', alignItems: 'center', gap: '5px' }}>
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

                <div className='cursor-pointer-underline-on-hover' onClick={() => setEditUserProfile(true)} style={{ color: 'rgb(1,101,1)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <p>edit</p>
                    <FaEdit ></FaEdit>
                </div>
            </div>
            <hr></hr>
            <div className='profile-div'>
                <p>Email : </p>
                <h3 className='email'>{user?.email}</h3>
                {
                    user?.emailVerified ?
                        <p style={{ color: 'rgb(1,101,1)' }}>Verified</p>
                        :
                        <p onClick={handleVerifyEmail} className='cursor-pointer-underline-on-hover' style={{ color: 'rgb(1,101,1)' }}>Verify Email</p>
                }

            </div>

            {
                editUserProfile &&
                <EditProfileModal editUserProfile={editUserProfile} setEditUserProfile={setEditUserProfile}></EditProfileModal>
            }
        </div>
    );
};

export default ProfileSection;