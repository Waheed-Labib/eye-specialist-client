import React from 'react';
import './CreateAccount.css'
import eyeCheckUp from '../../assets/images/sign in/eye-check-up-vector.jpg'
import { Link } from 'react-router-dom';
import ButtonTypeOne from '../shared/Buttons/ButtonTypeOne/ButtonTypeOne';
import ButtonTypeTwo from '../shared/Buttons/ButtonTypeTwo/ButtonTypeTwo';
import { FaArrowRight } from 'react-icons/fa';

const CreateAccount = () => {

    const handleCreateAccount = event => {

    }

    return (
        <div className='sign-in-sign-up-page'>

            <img src={eyeCheckUp} alt=''></img>

            <div className='sign-in-sign-up'>
                <p className='stylish-yellow-heading'>Create Account</p>
                <p className='white-center-bold-text'>it's free !</p>

                <form className='sign-in-sign-up-form' onSubmit={handleCreateAccount}>
                    <div className='name-inputs'>
                        <input type='text' placeholder='   First Name' required></input>
                        <input type='text' placeholder='   Last Name'></input>
                    </div>
                    <input type='email' placeholder='   Email' required></input>
                    <input type='password' placeholder='   Password' required></input>

                    <p className='white-center-bold-text'>
                        By clicking "Create Account",
                        <br></br>
                        you are agreeing with our <Link className='yellow-link'>community standards</Link>
                    </p>

                    <ButtonTypeOne text={'Create Account'}></ButtonTypeOne>
                </form>

                {/* ------OR-------- */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                    <div className='line'></div>
                    <p className='white-center-bold-text'>OR</p>
                    <div className='line'></div>
                </div>


                <ButtonTypeTwo text={'Sign in with Facebook'}></ButtonTypeTwo>

                {/* toggle to sign in */}
                <Link to='/signin' className='white-link'>
                    Already A Member?
                    <FaArrowRight className='rotate-icon'></FaArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default CreateAccount;