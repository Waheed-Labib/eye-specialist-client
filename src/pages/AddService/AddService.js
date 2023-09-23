import React from 'react';
import './AddService.css';
import { FaPlus, FaRegImage } from 'react-icons/fa6'

const AddService = () => {

    return (
        <form className='section add-service'>
            <div>
                <h1 className='section-heading'>Add A Service</h1>
            </div>

            <div className='add-service-buttons add-service-buttons-md'>
                <button type='submit' className='submit-btn'>
                    <p>Add</p>
                    <FaPlus></FaPlus>
                </button>
                <button className='reset-btn' type='reset'>Reset</button>
            </div>

            <div>
                <h3>Name of the Service</h3>
                <input className='add-service-input' type='text'></input>
            </div>

            <div>
                <h3>Price</h3>
                <input className='add-service-input' type='text' placeholder='$$$'></input>
            </div>

            <div>
                <h3>Description</h3>
                <textarea style={{ height: '90px' }} className='add-service-input'></textarea>
            </div>

            <div className='service-image-upload'>
                <FaRegImage></FaRegImage>
                <p>Upload Image</p>
            </div>

            <div className='add-service-buttons add-service-buttons-sm'>
                <button type='submit' className='submit-btn'>
                    <p>Add Service</p>
                </button>
                <button className='reset-btn' type='reset'>Reset</button>
            </div>
        </form>
    );
};

export default AddService;