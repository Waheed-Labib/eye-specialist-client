import React from 'react';
import './ButtonLoading.css'

const ButtonLoading = ({ submitBtnClicked, googleBtnClicked, updateChangesBtnActive }) => {
    return (
        <div className={`btn-loading ${submitBtnClicked && 'submit-loading'} ${googleBtnClicked && 'google-loading'}`}>

        </div>
    );
};

export default ButtonLoading;