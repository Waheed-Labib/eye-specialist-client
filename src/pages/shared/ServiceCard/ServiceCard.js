import React, { useState } from 'react';
import './ServiceCard.css'
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { name, image, description, price } = service;
    const [imageHover, setImageHover] = useState(false);

    return (
        <div className='service-card'>
            <img
                onMouseOver={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
                className='service-card-img'
                src={image} alt={name}
            ></img>

            {
                imageHover &&

                <div
                    onMouseOver={() => setImageHover(true)}
                    className='image-hover-div'>
                    <p>Click to see full screen</p>
                </div>
            }

            <div className='service-card-info'>
                <p className='service-card-name'>{name}</p>
                <p className='service-card-description'>
                    {description.substr(0, 100)}&nbsp;<span style={{ color: 'rgb(1,101,1)' }}>...</span>&nbsp;
                    <Link className='green-link link-without-underline text-semibold'>visit details</Link>
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <p className='service-card-price'>{price} $</p>
                        <div style={{ color: 'rgb(1,101,1)' }}>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>

                    <button className='service-card-button'>Details</button>
                </div>

            </div>

        </div>
    );
};

export default ServiceCard;