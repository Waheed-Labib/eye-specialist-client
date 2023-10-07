import React, { useContext } from 'react';
import './ReviewModal.css'
import { AuthContext } from '../../../../../contexts/AuthProvider';
import { FaRegStar } from 'react-icons/fa';

const ReviewModal = ({ reviewModalOpen, setReviewModalOpen }) => {

    const { user } = useContext(AuthContext);

    if (reviewModalOpen)
        return (
            <div className='review-modal'>
                <div className='review-modal-content'>
                    <div className='review-modal-header'>
                        <div>
                            <img src={user?.photoURL} alt=''></img>
                            <h4>{user?.displayName}</h4>
                        </div>


                        <span onClick={() => setReviewModalOpen(false)} class="close-review-modal">&times;</span>
                    </div>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <h4 style={{ margin: '0' }}>Rate Your Experience</h4>
                        <div className='rating-stars'>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                        </div>
                    </div>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '10px' }}>
                        <h4 style={{ margin: '0' }}>Describe Your Experience. (Optional)</h4>
                        <textarea style={{ width: '95%', margin: '0' }} className='review-input' name='review' placeholder='Your feelings, suggestions, or anything else.'></textarea>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', marginTop: '1%' }}>

                        <button className='submit-review-btn'>Submit</button>
                        <button className='reset-review-btn'>Reset</button>

                    </div>
                </div>
            </div>
        );
};

export default ReviewModal;