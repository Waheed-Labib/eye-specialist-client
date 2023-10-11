import React, { useContext, useRef, useState } from 'react';
import './EditProfileModal.css'
import { AuthContext } from '../../../../contexts/AuthProvider';
import uploadImage from '../../../../assets/images/create account/upload-user-image.jpg'
import { StorageContext } from '../../../../contexts/StorageProvider';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import toast from 'react-hot-toast';
import { v4 } from 'uuid';

const EditProfileModal = ({ editUserProfile, setEditUserProfile }) => {

    const { user, editProfile } = useContext(AuthContext);
    const { storage } = useContext(StorageContext);

    const [isImageChanged, setIsImageChanged] = useState(false);
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState(user?.photoURL || uploadImage);

    const inputImageRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setIsImageChanged(true);
        setImage(file);
        setImageURL(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append('file', file);
    }

    const handleImageClick = () => {
        inputImageRef.current.click()
    }

    const handleEditProfile = event => {
        event.preventDefault()

        const name = event.target.name.value;
        let profile;

        if (isImageChanged) {
            const imageRef = ref(storage, `userPhotos/${image.name + v4()}`);

            uploadBytes(imageRef, image)
                .then(() => {
                    getDownloadURL(imageRef)
                        .then(url => {
                            profile = {
                                displayName: name,
                                photoURL: url
                            }

                            editProfile(profile)
                                .then(() => {
                                    toast.success(
                                        <div className='toast toast-success'>
                                            <p>Profile Updated.</p>
                                        </div>
                                    )

                                    setEditUserProfile(false)
                                })

                                .catch(() => toast.error(
                                    <div className='toast toast-error'>
                                        <p>Something Went Wrong.</p>
                                    </div>
                                ))

                        })
                })

            return
        }

        else profile = {
            displayName: name
        }

        editProfile(profile)
            .then(() => {
                toast.success(
                    <div className='toast toast-success'>
                        <p>Profile Updated.</p>
                    </div>
                )
                setEditUserProfile(false)
            })
            .catch(() => toast.error(
                <div className='toast toast-error'>
                    <p>Something Went Wrong.</p>
                </div>
            ))
    }

    return (
        <div className='edit-profile-modal'>
            <form onSubmit={handleEditProfile} className='edit-profile-modal-content'>


                <div>
                    <h1 style={{ color: '#464646' }}>Edit Profile</h1>
                    <span onClick={() => setEditUserProfile(false)} className="close-edit-profile-modal">&times;</span>
                </div>

                <div>
                    <h3>Name : </h3>
                    <input type='text' name='name' defaultValue={user?.displayName}></input>
                </div>

                <div>
                    <h3>Image : </h3>
                    <div onClick={handleImageClick} style={{ width: '75%' }}>

                        <img src={imageURL} alt=''></img>

                        <input onChange={handleImageChange} type='file' ref={inputImageRef} style={{ display: 'none' }}></input>
                    </div>

                </div>

                <button type='submit'>Update Changes</button>
            </form>
        </div>
    );
};

export default EditProfileModal;