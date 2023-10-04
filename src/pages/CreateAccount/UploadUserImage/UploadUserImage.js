import React, { useState, useRef, useContext } from 'react';
import './UploadUserImage.css';
import { StorageContext } from '../../../contexts/StorageProvider';
import uploadUserImg from '../../../assets/images/create account/upload-user-image.jpg';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const UploadUserImage = ({ setUploadUserImageOpen }) => {

    const inputRef = useRef(null);
    const [image, setImage] = useState('');

    const { editProfile } = useContext(AuthContext)
    const { storage } = useContext(StorageContext)

    const handleImageClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = event => {
        const file = event.target.files[0];
        setImage(file);
        const formData = new FormData();
        formData.append('file', file);
    }

    const handleAddUserImage = () => {
        const imageRef = ref(storage, `userPhotos/${image.name + v4()}`);

        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then(url => {
                        const profile = {
                            photoURL: url
                        }

                        editProfile(profile)
                            .then(() => {
                                toast.success(
                                    <div className='toast toast-success'>
                                        <p>Image Added</p>
                                    </div>
                                )

                                setUploadUserImageOpen(false)
                            })
                            .catch(err => {
                                <div className='toast toast-error'>
                                    <p>Something Went Wrong adding the image.</p>
                                </div>
                            })
                    })
            })
            .catch(() => {
                toast.error(
                    <div className='toast toast-error'>
                        <p>Something Went Wrong adding the image.</p>
                    </div>
                )
            })

    }

    return (
        <div className='upload-user-image-modal'>
            <div className='upload-user-image-content'>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', paddingInline: '2%' }}>
                    <h1 style={{ color: '#464646' }}>Upload Your Image</h1>
                    <button onClick={() => setUploadUserImageOpen(false)} className='skip-btn'>Skip</button>
                </div>

                {
                    image ?
                        <div className='upload-img-container'>
                            <div onClick={handleImageClick}>
                                <div>
                                    <img className='uploaded-user-img' src={URL.createObjectURL(image)} alt=''></img>
                                </div>

                                <input onChange={handleImageChange} type='file' ref={inputRef} style={{ display: 'none' }}></input>

                                <button className='try-another-one-btn'>Try Another One</button>
                            </div>

                            <button onClick={handleAddUserImage} className='select-this-one-btn'>Select This One</button>

                        </div>
                        :
                        <div onClick={handleImageClick}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6%' }}>
                                <img className='upload-user-img-img' src={uploadUserImg} alt=''></img>
                            </div>

                            <input onChange={handleImageChange} type='file' ref={inputRef} style={{ display: 'none' }}></input>
                        </div>
                }


            </div>
        </div>
    );
};

export default UploadUserImage;