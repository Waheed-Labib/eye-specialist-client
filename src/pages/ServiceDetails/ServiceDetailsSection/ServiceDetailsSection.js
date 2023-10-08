import React from 'react';
import './ServiceDetailsSection.css'
import { FaStar } from 'react-icons/fa';
import ShowRating from '../ShowRating/ShowRating';

const ServiceDetailsSection = ({ service }) => {

    const { _id, name, image, description, price } = service;
    const descriptionParagraphs = description.split("\n\n");

    return (
        <div className='service-details-section-container'>
            <div className='service-details-section'>

                <img className='service-img-lg' src={image} alt=''></img>

                <div className='service-info'>
                    <h1>{name} Treatment</h1>
                    <img className='service-img-sm' src={image} alt=''></img>
                    {
                        descriptionParagraphs.map(descriptionParagraph => <p key={descriptionParagraphs.indexOf(descriptionParagraph)}>{descriptionParagraph}</p>)
                    }
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ShowRating rating={service.rating} ratingPosition='service-details'></ShowRating>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'rgb(1,101,1)' }}>{price} $</h3>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ServiceDetailsSection;