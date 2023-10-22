import React from 'react';
import './ServicesPagination.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ServicesPagination = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '0', marginBottom: '7.5%' }}>
            <button className='pagination-btn'>
                <FaAngleLeft></FaAngleLeft>
            </button>

            <p>Page &nbsp;
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>2</span>
                &nbsp; of &nbsp;
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>4</span>
            </p>

            <button className='pagination-btn'>
                <FaAngleRight></FaAngleRight>
            </button>
        </div>
    );
};

export default ServicesPagination;