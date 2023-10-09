import React, { useState } from 'react';
import ShowRating from '../../../ServiceDetails/ShowRating/ShowRating';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete, AiTwotoneDelete } from 'react-icons/ai';
import './MyReview.css'

const MyReview = ({ myReview }) => {

    const { serviceName, rating, review } = myReview;

    const [toolTip, setToolTip] = useState(null);

    return (
        <div className='my-review-container'>
            <div className='my-review'>
                <h2 style={{ color: 'rgb(1,101,1)' }}>{serviceName}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#464646' }}>10-01-2021</p>
                    <ShowRating rating={rating} ratingPosition='service-details'></ShowRating>
                </div>
                <p style={{ fontSize: '1.2rem' }}>{review}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#464646' }}>reviewed by you</p>
                    <div className='my-review-icons'>
                        <FaEdit onMouseOver={() => setToolTip('Edit')} onMouseLeave={() => setToolTip(null)} style={{ color: '#464646', marginRight: '16px' }} className='my-review-icon edit-icon'></FaEdit>

                        <AiOutlineDelete className='my-review-icon delete-icon' onMouseOver={() => setToolTip('Delete')} onMouseLeave={() => setToolTip(null)} style={{ color: 'red' }}></AiOutlineDelete>

                    </div>

                    <div className='tooltip'>
                        {
                            toolTip &&
                            <p className={`${toolTip === 'Edit' ? 'edit-tooltip' : 'delete-tooltip'}`} style={{ padding: '5px' }}>{toolTip} Review</p>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyReview;