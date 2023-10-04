import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddNewServiceLink = () => {
    return (
        <Link className='show-all-link' to='/add-service'>
            <p>Add New Service</p>
            <FaArrowRight></FaArrowRight>
        </Link>
    );
};

export default AddNewServiceLink;