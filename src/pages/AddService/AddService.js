import React, { useState } from 'react';
import './AddService.css';
import { FaPlus } from 'react-icons/fa6'
import toast from 'react-hot-toast';
import UploadImage from './UploadImage/UploadImage';


const AddService = () => {

    const [photoUrl, setPhotoURL] = useState('');

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;

        if (/(?=.*[^0-9])/.test(price)) {
            toast.error(
                <div className='toast toast-error'>
                    <p>Price should only contain numerical digits.</p>
                </div>
            )
            return
        }

        if (!photoUrl) {
            toast.error(
                <div className='toast toast-error'>
                    <p>You have not uploaded an image.</p>
                </div>
            )

            return
        }

        const service = {
            name,
            price,
            description,
            image: photoUrl
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(
                    <div className='toast toast-success'>
                        <p>Service {name} Added</p>
                    </div>
                )
                form.reset();
            })
            .catch(() => {
                toast.error(
                    <div className='toast toast-error'>
                        <p>Something Went Wrong adding the service.</p>
                    </div>
                )
            })
    }

    return (
        <form
            onSubmit={handleAddService}
            className='section add-service'>
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
                <input name='name' className='add-service-input' type='text' required></input>
            </div>

            <div>
                <h3>Price</h3>
                <input name='price' className='add-service-input' type='text' placeholder='$$$' required></input>
            </div>

            <div>
                <h3>Description</h3>
                <textarea name='description' style={{ height: '90px' }} className='add-service-input' required></textarea>
            </div>

            <UploadImage setPhotoURL={setPhotoURL}></UploadImage>

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