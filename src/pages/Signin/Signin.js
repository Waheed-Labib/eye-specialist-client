import React from 'react';
import './Signin.css';
import eyeCheckUp from '../../assets/images/sign in/eye-check-up-vector.jpg'
import { Link } from 'react-router-dom';
import ButtonTypeOne from '../shared/Buttons/ButtonTypeOne/ButtonTypeOne';
import ButtonTypeTwo from '../shared/Buttons/ButtonTypeTwo/ButtonTypeTwo';
import { FaArrowRight } from 'react-icons/fa';

const Signin = () => {

    const handleSignIn = event => {

    }

    return (
        <div className='sign-in-sign-up-page sign-in-page'>

            <img src={eyeCheckUp} alt=''></img>

            <div className='sign-in-sign-up'>
                <p className='stylish-yellow-heading'>Sign in to your Account</p>

                <form className='sign-in-sign-up-form' onSubmit={handleSignIn}>
                    <input type='email' placeholder='   Email' required></input>
                    <input type='password' placeholder='   Password' required></input>

                    <ButtonTypeOne text={'Sign In'}></ButtonTypeOne>
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