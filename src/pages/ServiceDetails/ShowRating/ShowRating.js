import React from 'react';
import './ShowRating.css'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaStarHalfStroke } from 'react-icons/fa6'

const ShowRating = ({ rating, ratingPosition }) => {
    const stars = [];

    if (!rating) return <p style={{ color: 'rgb(1,101,1)' }}>Not Rated</p>

    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<FaStar className={`${ratingPosition === 'service-details' ? 'green-star' : 'yellow-star'}`} key={i} />);
    }
    if (Math.floor(rating) === Math.ceil(rating)) {
        for (let i = 0; i < (5 - rating); i++) {
            stars.push(<FaRegStar className={`${ratingPosition === 'service-details' ? 'green-star' : 'yellow-star'}`} key={10 - i}></FaRegStar>)
        }
    }
    else {
        stars.push(<FaStarHalfStroke key={100} style={{ fontSize: '1.5rem' }} className={`${ratingPosition === 'service-details' ? 'green-star' : 'yellow-star'}`}></FaStarHalfStroke>)

        for (let i = 0; i < (4 - Math.floor(rating)); i++) {
            stars.push(<FaRegStar className={`${ratingPosition === 'service-details' ? 'green-star' : 'yellow-star'}`} key={10 - i}></FaRegStar>)
        }
    }

    return <div style={{ display: 'flex', alignItems: 'center' }}>
        {stars} <h1 style={{ margin: '0', marginLeft: '16px', fontSize: '1.5rem' }} className={`${ratingPosition === 'service-details' ? 'green-star' : 'd-none'}`}>{rating}</h1>
    </div>;
};

export default ShowRating;