import React, { useContext, useState } from 'react';
import './ReviewModal.css'
import { AuthContext } from '../../../../../contexts/AuthProvider';
import RatingStars from '../RatingStars/RatingStars';
import toast from 'react-hot-toast';
import { countAvgRating } from '../../../../../utilities/CountAvgRating';
import Loading from '../../../../shared/Loading/Loading';

const ReviewModal = ({ service, selectedStar, setSelectedStar, reviewModalOpen, setReviewModalOpen, reviews, setReviews }) => {

    const { user } = useContext(AuthContext);

    const [addingReview, setAddingReview] = useState(false);

    const handleReviewSubmit = event => {

        event.preventDefault();

        setAddingReview(true)

        if (!selectedStar) {
            toast.error(
                <div className='toast toast-error'>
                    <p>Please give a rating.</p>
                </div>
            )
            setAddingReview(false)
            return
        }

        const rating = selectedStar;
        const review = event.target.review.value;

        // Create the date in review
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = year + '-' + month + '-' + day;

        // add review and rating to the ratings in database
        const newReview = {
            userId: user?.uid,
            userName: user?.displayName,
            userImage: user?.photoURL,
            serviceId: service?._id,
            serviceName: service?.name,
            rating: rating,
            review: review,
            date: formattedDate
        }

        fetch('https://eye-specialist-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(
                        <div className='toast toast-success'>
                            <p>Thank you for your feedback.</p>
                        </div>)
                }

                setReviews([newReview, ...reviews])
            })
            .catch(() => toast.error(
                <div className='toast toast-error'>
                    <p>Something Went Wrong.</p>
                </div>
            ))

        // count average rating of the servie and add this to the particular service details
        const prevRating = service?.rating;
        const prevRatingCount = service?.ratingCount;

        let newRating, newRatingCount;

        if (prevRating) {
            newRating = countAvgRating(prevRating, prevRatingCount, rating).avgRating;
            newRatingCount = countAvgRating(prevRating, prevRatingCount, rating).newRatingCount;
        }

        else {
            newRating = countAvgRating(0, 0, rating).avgRating;
            newRatingCount = countAvgRating(0, 0, rating).newRatingCount;
        }

        const newService = {
            _id: service?._id,
            name: service?.name,
            price: service?.price,
            description: service?.description,
            image: service?.image,
            rating: newRating,
            ratingCount: newRatingCount
        }

        fetch(`https://eye-specialist-server.vercel.app/services/${service?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(
                        <div className='toast toast-success'>
                            <p>Your feedback is added to the page.</p>
                        </div>)
                }

                setReviewModalOpen(false)
                setAddingReview(false)
            })
            .catch(() => {
                setAddingReview(false)
                toast.error(
                    <div className='toast toast-error'>
                        <p>Something Went Wrong.</p>
                    </div>

                )
            })

    }

    const handleReviewReset = () => {
        setSelectedStar(null)
    }

    if (reviewModalOpen)
        return (
            <div className='review-modal'>
                <form onSubmit={handleReviewSubmit} onReset={handleReviewReset} className='review-modal-content'>
                    {
                        addingReview ?
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <div style={{ width: '20%' }}>
                                    <Loading></Loading>
                                </div>
                            </div>
                            :
                            <>
                                <div className='review-modal-header'>
                                    <div>
                                        <img src={user?.photoURL} alt=''></img>
                                        <h4>{user?.displayName}</h4>
                                    </div>


                                    <span onClick={() => setReviewModalOpen(false)} className="close-review-modal">&times;</span>
                                </div>

                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    <h4 style={{ margin: '0' }}>Rate Your Experience</h4>
                                    <RatingStars
                                        selectedStar={selectedStar}
                                        setSelectedStar={setSelectedStar}
                                    ></RatingStars>
                                </div>

                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '10px' }}>
                                    <h4 style={{ margin: '0' }}>Describe Your Experience. (Optional)</h4>
                                    <textarea style={{ width: '95%', margin: '0' }} className='review-input' name='review' placeholder='Your feelings, suggestions, or anything else.'></textarea>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', marginTop: '1%' }}>

                                    <button type='submit' className='submit-review-btn'>Submit</button>
                                    <button type='reset' className='reset-review-btn'>Reset</button>

                                </div>
                            </>
                    }

                </form >
            </div >
        );
};

export default ReviewModal;