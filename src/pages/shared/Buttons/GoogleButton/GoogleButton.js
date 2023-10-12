import React, { useContext, useState } from 'react';
import './GoogleButton.css'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonLoading from '../../ButtonLoading/ButtonLoading';

const GoogleButton = () => {

    const { user, setUser, loading, googleSignIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [googleBtnClicked, setGoogleBtnClicked] = useState(false)

    const handleGoogleSignin = () => {
        setGoogleBtnClicked(true);
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

                navigate(from, { replace: true })
            })
            .catch(err => {
                setGoogleBtnClicked(false)
                toast.error(
                    <div className='toast toast-error'>
                        <p>{err.message}</p>
                    </div>
                )

            })
    }

    return (
        <div onClick={handleGoogleSignin} className='google-button'>
            {
                loading && googleBtnClicked ?
                    <ButtonLoading googleBtnClicked={googleBtnClicked}></ButtonLoading>
                    :
                    <>
                        <FaGoogle></FaGoogle>
                        <p>Sign in with Google</p>
                    </>
            }
        </div>
    );
};

export default GoogleButton;