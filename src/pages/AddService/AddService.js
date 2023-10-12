import React, { useEffect, useState } from 'react';
import './AddService.css';
import { FaPlus } from 'react-icons/fa6'
import toast from 'react-hot-toast';
import UploadServiceImage from './UploadServiceImage/UploadServiceImage';
import { Navigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';


const AddService = () => {

    const [photoUrl, setPhotoURL] = useState('');
    const [isAdded, setIsAdded] = useState(false);
    const [navigate, setNavigate] = useState(null);

    const [addingService, setAddingService] = useState(false);

    useEffect(() => {
        if (isAdded) {
            fetch('https://eye-specialist-server.vercel.app/services')
                .then(res => res.json())
                .then(data => {
                    // navigate to the last service in services, that means the recently added service
                    setNavigate(`/service-details/${data[data.length - 1]._id}`)
                })
                .catch(() => alert('Please check your internet connection, and then refresh page.'))
        }
    }, [isAdded])

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
                    <h4>You have not uploaded an image.</h4>
                    <h4>Or the format is not supported.</h4>
                    <h4>Or you have lost your internet connection</h4>
                </div>
            )

            return
        }

        setAddingService(true);

        const service = {
            name,
            price,
            description,
            image: photoUrl
        }

        fetch('https://eye-specialist-server.vercel.app/services', {
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
                setIsAdded(true);
            })
            .catch(() => {
                toast.error(
                    <div className='toast toast-error'>
                        <p>Something Went Wrong adding the service.</p>
                    </div>
                )
            })
    }

    if (navigate) return <Navigate to={navigate}></Navigate>

    return (
        <form onSubmit={handleAddService}
            className='section add-service'>
            {
                addingService ?
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div style={{ width: '20%' }}>
                            <Loading></Loading>
                        </div>
                    </div>
                    :
                    <>
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

                        <UploadServiceImage setPhotoURL={setPhotoURL} isAdded={isAdded}></UploadServiceImage>

                        <div className='add-service-buttons add-service-buttons-sm'>
                            <button type='submit' className='submit-btn'>
                                <p>Add Service</p>
                            </button>
                            <button className='reset-btn' type='reset'>Reset</button>
                        </div>
                    </>
            }


        </form>
    );
};

export default AddService;