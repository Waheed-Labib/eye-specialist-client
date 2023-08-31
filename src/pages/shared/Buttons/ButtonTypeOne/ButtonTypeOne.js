import React from 'react';
import './ButtonTypeOne.css'

const ButtonTypeOne = ({ text }) => {
    return (
        <div className='button-one'>
            <p>{text}</p>
        </div>
    );
};

export default ButtonTypeOne;