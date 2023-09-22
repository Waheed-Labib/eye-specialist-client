import React, { useContext } from 'react';
import './GoogleButton.css'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa'

const GoogleButton = () => {

    const { user, setUser, loading, googleSignIn } = useContext(AuthContext)

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success(
                    <div className='toast toast-success'>
                        <p>Hello, {user?.displayName}</p>
                        <p>Successfully signed in with Google</p>
                    </div>
                )
            })
            .catch(err => toast.error(
                <div className='toast toast-error'>
                    <p>{err.message}</p>
                </div>
            ))
    }

    return (
        <div onClick={handleGoogleSignin} className='google-button'>
            <FaGoogle></FaGoogle>
            <p>Sign in with Google</p>
        </div>
    );
};

export default GoogleButton;