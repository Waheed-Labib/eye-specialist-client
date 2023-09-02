import React, { useContext } from 'react';
import './CreateAccount.css'
import eyeCheckUp from '../../assets/images/sign in/eye-check-up-vector.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegSmileBeam } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import SubmitButton from '../shared/Buttons/SubmitButton/SubmitButton';
import FacebookButton from '../shared/Buttons/FacebookButton/FacebookButton';

const CreateAccount = () => {

    const {
        user,
        loading,
        setUser,
        createAccount,
        editProfile,
        facebookSignIn
    } = useContext(AuthContext)

    const handleCreateAccount = event => {
        event.preventDefault();
        const form = event.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        createAccount(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                const profile = {
                    displayName: firstName + ' ' + lastName
                }

                editProfile(profile)
                    .then(() => {

                    })
                    .catch(err => {
                        console.error(err.message)
                    })

                toast.success(
                    <div style={{ paddingInline: '30px' }} className='toast toast-success'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <p style={{ margin: '0', marginBottom: '5px' }}>Congrats, {firstName} !</p>

                        </div>
                        <p style={{ margin: '0' }}>You are a Member Now.</p>
                    </div>
                )

                form.reset();
            })
            .catch(err => toast.error(
                <p className='toast toast-error'>{err.message}</p>
            ))
    }

    return (
        <div className='sign-in-sign-up-page'>

            <img src={eyeCheckUp} alt=''></img>

            <div className='sign-in-sign-up'>
                <p className='stylish-yellow-heading'>Create Account</p>
                <p className='white-center-bold-text'>it's free !</p>

                <form className='sign-in-sign-up-form' onSubmit={handleCreateAccount}>
                    <div className='name-inputs'>
                        <input type='text' placeholder='First Name' name='firstName' required></input>
                        <input type='text' placeholder='Last Name' name='lastName'></input>
                    </div>
                    <input type='email' placeholder='Email' name='email' required></input>
                    <input type='password' placeholder='Password' name='password' required></input>

                    <p className='white-center-bold-text'>
                        By clicking "Create Account",
                        <br></br>
                        you are agreeing with our <Link className='yellow-link'>community standards</Link>
                    </p>


                    <SubmitButton text={'Create Account'}></SubmitButton>


                </form>

                {/* ------OR-------- */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                    <div className='line'></div>
                    <p className='white-center-bold-text'>OR</p>
                    <div className='line'></div>
                </div>


                <FacebookButton></FacebookButton>

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