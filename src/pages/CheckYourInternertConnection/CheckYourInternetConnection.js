import React from 'react';
import './CheckYourInternetConnection.css';
import oops from '../../assets/images/404/jashim-min.jpg'
import useTitle from '../../hooks/useTitle';

const CheckYourInternetConnection = () => {

    useTitle('Error')

    return (
        <div className='no-internet'>
            <img src={oops} alt=''></img>
            <h1>Ooops ...</h1>
            <p>You may have lost your <span style={{ fontWeight: '800', fontSize: '1.5rem' }}>Internet Connection</span></p>
        </div>
    );
};

export default CheckYourInternetConnection; 