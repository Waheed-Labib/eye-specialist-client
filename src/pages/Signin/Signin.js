import React, { useContext, useState } from 'react';
import './Signin.css';
import eyeCheckUp from '../../assets/images/sign in/eye-check-up-vector.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SubmitButton from '../shared/Buttons/SubmitButton/SubmitButton';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import GoogleButton from '../shared/Buttons/GoogleButton/GoogleButton';
import useTitle from '../../hooks/useTitle';

const Signin = () => {

    useTitle('Sign in')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

    const {
        loading,
        setUser,
        signIn,
        resetPassword

    } = useContext(AuthContext)

    const handleSignIn = event => {

        event.preventDefault();

        setSubmitBtnClicked(true);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
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
                            <p className='toast toast-success'>Hello, {user.displayName.split(' ')[0]} !</p>
                        )
                        form.reset()
                        navigate(from, { replace: true })
                    })
                    .catch(() => {
                        toast.error(
                            <p className='toast toast-error'>Token Not Found From Server.</p>
                        )
                    })

            })
            .catch(err => {
                setSubmitBtnClicked(false)
                toast.error(
                    <p className='toast toast-error' > {err.message}</p>
                )
            })
    }

    const [email, setEmail] = useState('')

    const handleForgotPassword = () => {
        if (email) {
            resetPassword(email)
                .then(() => {
                    toast.success(
                        <p className='toast toast-success'>Password Reset Link is sent to your Email </p>
                    )
                })
                .catch(err => toast.error(
                    <p className='toast toast-error'>
                        {err.message}
                    </p>
                ))
        }

        else {
            toast.error(
                <p className='toast toast-error'>Please Fill the Email Field first.</p>
            )
        }
    }

    return (
        <div className='sign-in-sign-up-page sign-in-page'>

            <img className='sign-in-sign-up-img' src={eyeCheckUp} alt=''></img>

            <div className='sign-in-sign-up'>
                <p style={{ marginTop: '30px', marginBottom: '60px' }} className='stylish-yellow-heading'>Sign in to your Account</p>

                <form className='sign-in-sign-up-form' onSubmit={handleSignIn}>
                    <input style={{ width: '190px' }} onChange={event => setEmail(event.target.value)} type='email' placeholder='Email' name='email' required />
                    <input style={{ width: '190px' }} type='password' placeholder='Password' name='password' required></input>

                    <SubmitButton type='submit' text={'Sign In'} loading={loading} submitBtnClicked={submitBtnClicked}></SubmitButton>
                </form>

                <Link style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleForgotPassword} className='yellow-link'>Forgot Password?</Link>

                {/* ------OR-------- */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                    <div className='line'></div>
                    <p className='white-center-text'>OR</p>
                    <div className='line'></div>
                </div>


                <GoogleButton></GoogleButton>

                {/* toggle to sign in */}
                <Link to='/create-account' className='white-link rotate-icon-on-hover'>
                    Not A Member?
                    <FaArrowRight className='rotate-icon'></FaArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default Signin;