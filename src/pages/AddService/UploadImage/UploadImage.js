import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaRegImage } from 'react-icons/fa6';
import './UploadImage.css';
import { TiCancel, TiTick } from 'react-icons/ti';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { StorageContext } from '../../../contexts/StorageProvider';
import { v4 } from 'uuid'
import toast from 'react-hot-toast';

const UploadImage = ({ setPhotoURL }) => {

    const [image, setImage] = useState('')
    const [modalOpen, setModalOpen] = useState(false);

    const { storage } = useContext(StorageContext)

    const inputRef = useRef(null)

    const handleImageClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = event => {
        const file = event.target.files[0];
        setImage(file);
        const formData = new FormData();
        formData.append('file', file);

        setModalOpen(true);
    }

    const handleAddServiceImage = () => {
        const imageRef = ref(storage, `servicePhotos/${image.name + v4()}`)

        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then(url => setPhotoURL(url))
            })
            .catch(() => {
                toast.error(
                    <div className='toast toast-error'>
                        <p>Something Went Wrong adding the image.</p>
                    </div>
                )

                setImage('');
            })

        setModalOpen(false)
    }

    return (
        <div>
            {
                image ?
                    <div>
                        <div onClick={handleImageClick} className='service-image-upload'>
                            <div>
                                <img className='selected-image' src={URL.createObjectURL(image)} alt=''></img>

                                <p className='green-link'>Try Another Image?</p>
                            </div>

                            <input onChange={handleImageChange} type='file' ref={inputRef} style={{ display: 'none' }}></input>
                        </div>
                    </div>

                    :

                    <div onClick={handleImageClick} className='service-image-upload'>
                        <FaRegImage></FaRegImage>
                        <p>Upload Image</p>
                        <input onChange={handleImageChange} type='file' ref={inputRef} style={{ display: 'none' }}></input>
                    </div>
            }

            {
                image && modalOpen &&
                <div className='select-image-modal'>
                    <div className='select-image-modal-content'>
                        <h2 style={{ marginBottom: '15px', color: '#464646' }}>Select This Image?</h2>
                        <img src={URL.createObjectURL(image)} alt=''></img>
                        <div>
                            <button onClick={handleAddServiceImage} className='ok-btn'>
                                <p>OK</p>
                                <TiTick className='tick'></TiTick>
                            </button>

                            <button
                                className='cancel-btn'
                                onClick={() => setImage('')}>
                                <p>Cancel</p>
                                <TiCancel className='cancel-icon'></TiCancel>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default UploadImage;