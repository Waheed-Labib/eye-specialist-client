import React, { useContext } from 'react';
import './Signin.css';
import eyeCheckUp from '../../assets/images/sign in/eye-check-up-vector.jpg'
import { Link } from 'react-router-dom';
import ButtonTypeTwo from '../shared/Buttons/ButtonTypeTwo/ButtonTypeTwo';
import { FaArrowRight } from 'react-icons/fa';
import SubmitButton from '../shared/Buttons/ButtonTypeOne/SubmitButton';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Signin = () => {

    const {
        user,
        loading,
        setUser,
        signIn,
        resetPassword,
        facebookSignIn

    } = useContext(AuthContext)

    const handleSignIn = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(result.user)
                toast.success(
                    <p className='toast toast-success'>Hello, {user.displayName} !</p>
                )

                form.reset()
            })
            .catch(err => toast.error(
                <p className='toast toast-error'>{err.message}</p>
            ))


    }

    return (
        <div className='sign-in-sign-up-page sign-in-page'>

            <img src={eyeCheckUp} alt=''></img>

            <div className='sign-in-sign-up'>
                <p className='stylish-yellow-heading'>Sign in to your Account</p>

                <form className='sign-in-sign-up-form' onSubmit={handleSignIn}>
                    <input type='email' placeholder='Email' name='email' required></input>
                    <input type='password' placeholder='Password' name='password' required></input>

                    <SubmitButton type='submit' text={'Sign In'}></SubmitButton>
                </form>

                <Link className='yellow-link'>Forgot Password?</Link>

                {/* ------OR-------- */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                    <div className='line'></div>
                    <p className='white-center-bold-text'>OR</p>
                    <div className='line'></div>
                </div>


                <ButtonTypeTwo text={'Sign in with Facebook'}></ButtonTypeTwo>

                {/* toggle to sign in */}
                <Link to='/create-account' className='white-link'>
                    Not A Member?
                    <FaArrowRight className='rotate-icon'></FaArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default Signin;