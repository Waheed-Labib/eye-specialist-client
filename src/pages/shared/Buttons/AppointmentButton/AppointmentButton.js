import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './AppointmentButton.css'

const AppointmentButton = () => {
    return (
        <div className='appointment-btn'>
            <h4>Call now</h4>
            <FaPhoneAlt></FaPhoneAlt>
        </div>
    );
};

export default AppointmentButton;