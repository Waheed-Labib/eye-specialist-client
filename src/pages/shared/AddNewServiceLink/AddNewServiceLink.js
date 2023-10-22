import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AddNewServiceLink.css'

const AddNewServiceLink = () => {
    return (
        <Link className='add-service-link' to='/add-service'>
            <p>Add New Service</p>
            <FaArrowRight></FaArrowRight>
        </Link>
    );
};

export default AddNewServiceLink;