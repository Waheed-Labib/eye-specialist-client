import React, { useState } from 'react';
import './ServiceCard.css'
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Overlay } from 'react-bootstrap';

const ServiceCard = ({ service }) => {

    const { _id, name, image, description, price } = service;
    const [hoverImage, setHoverImage] = useState(false)

    return (
        <div className='service-card'>
            <PhotoProvider>
                <PhotoView src={image}>
                    <img
                        onMouseOver={() => setHoverImage(true)}
                        onMouseLeave={() => setHoverImage(false)}
                        className='service-card-img'
                        src={image} alt="" />
                </PhotoView>
            </PhotoProvider >

            <p
                className={`img-hover-text ${hoverImage || 'd-none'}`}>Click image for full screen view</p>

            <Link className='service-details-link' to={`/service-details/${_id}`}>
                <div className='service-card-info'>
                    <p className='service-card-name'>{name}</p>
                    <p className='service-card-description'>
                        {description.substr(0, 100)}&nbsp;<span style={{ color: 'rgb(1,101,1)' }}>...</span>&nbsp;
                        <button className='service-details-btn'>visit details</button>
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
            </Link>

        </div>
    );
};

export default ServiceCard;