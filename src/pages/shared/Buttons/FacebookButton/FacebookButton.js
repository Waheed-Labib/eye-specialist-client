import React, { useContext } from 'react';
import './FacebookButton.css'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const FacebookButton = () => {

    const { user, setUser, loading, facebookSignIn } = useContext(AuthContext)

    const handleFacebookSignin = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success(
                    <div className='toast toast-success'>
                        <p>Hello, ${user?.displayName}</p>
                        <p>Facebook Authentication Successful</p>
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
        <div onClick={handleFacebookSignin} className='facebook-button'>
            <p>Sign in with Facebook</p>
        </div>
    );
};

export default FacebookButton;