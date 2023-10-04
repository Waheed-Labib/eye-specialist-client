import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowAllServicesLink = () => {
    return (
        <Link className='show-all-link' to='/services'>
            <p>Show All Services</p>
            <FaArrowRight></FaArrowRight>
        </Link>
    );
};

export default ShowAllServicesLink;