import React from 'react';
import './SubmitButton.css'
import ButtonLoading from '../../ButtonLoading/ButtonLoading';

const SubmitButton = ({ text, loading, submitBtnClicked }) => {

    return (
        <button type='submit' className='submit-button'>
            {
                loading && submitBtnClicked ?
                    <ButtonLoading submitBtnClicked={submitBtnClicked}></ButtonLoading>
                    :
                    <p>{text}</p>
            }
        </button>
    );
};

export default SubmitButton;