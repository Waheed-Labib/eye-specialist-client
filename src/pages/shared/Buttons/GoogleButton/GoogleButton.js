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

                const currentUser = {
                    uid: user.uid
                }

                // get jwt token
                fetch('https://eye-specialist-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('dr-bean-token', data.token);

                        setUser(result.user);
                        toast.success(
                            <p className='toast toast-success'>Hello, {user.displayName} !</p>
                        )
                        navigate(from, { replace: true })
                    })
                    .catch(() => {
                        toast.error(
                            <p className='toast toast-error'>Token Not Found From Server.</p>
                        )
                    })
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