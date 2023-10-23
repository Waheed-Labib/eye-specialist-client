import React from 'react';
import './ErrorPage.css'
import error from '../../assets/images/404/404.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {

    useTitle('404')

    return (
        <div>
            <div className='error-page'>
                <img className='error-page-img' src={error} alt=''></img>
                <h1>404</h1>
                <p>This page doesn't exist.</p>
                <Link onClick={() => window.history.back(1)} className='go-back-link'>
                    <p style={{ fontSize: '1.25rem' }}>Go back</p>
                </Link>
            </div>
        </div>

    );
};

export default ErrorPage;