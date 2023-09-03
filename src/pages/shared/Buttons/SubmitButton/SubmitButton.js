import React from 'react';
import './SubmitButton.css'

const SubmitButton = ({ text }) => {

    return (
        <button type='submit' className='submit-button'>
            <p>{text}</p>
        </button>
    );
};

export default SubmitButton;