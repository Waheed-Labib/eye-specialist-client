import React, { useContext, useState } from 'react';
import RatingStars from '../../../../ServiceDetails/ServiceDetailsSection/RateAndReview/RatingStars/RatingStars';
import { AiOutlineDelete } from 'react-icons/ai';
import './EditReview.css'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import { updateAvgRating } from '../../../../../utilities/UpdateAvgRating';
import Loading from '../../../../shared/Loading/Loading';

const EditReview = ({ service, myReview, setEditReview, myReviews, setMyReviews }) => {

    const { user } = useContext(AuthContext)

    const { serviceId, serviceName, rating, review } = myReview;

    const [selectedStar, setSelectedStar] = useState(rating);

    const [updatingReview, setUpdatingReview] = useState(false)

    const handleUpdateReview = event => {

        event.preventDefault();

        setUpdatingReview(true);

        if (!selectedStar) {
            toast.error(
                <div className='toast toast-error'>
                    <p>Please give a rating.</p>
                </div>
            )
            return
        }

        const rating = selectedStar;
        const review = event.target.review.value;

        // add review and rating to the ratings in database
        const updatedReview = {
            userId: user?.uid,
            userName: user?.displayName,
            userImage: user?.photoURL,
            serviceId: serviceId,
            serviceName: serviceName,
            rating: rating,
            review: review
        }

        fetch(`https://eye-specialist-server.vercel.app/reviews/${myReview?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {

                    fetch(`https://eye-specialist-server.vercel.app/user-reviews/${user?.uid}`)
                        .then(res => res.json())
                        .then(data => setMyReviews(data))
                        .catch(() => alert('Please Check Your Internet Connection.'))
                }
            })
            .catch((err) => {
                toast.error(
                    <div className='toast toast-error'>
                        <p>Something Went Wrong.</p>
                    </div>
                )
                console.error(err)
                return
            })

        // count average rating of the servie and add this to the particular service details

        const updatedRating = updateAvgRating(myReview?.rating, selectedStar, service?.rating, service?.ratingCount);

        const newService = {
            _id: service?._id,
            name: service?.name,
            price: service?.price,
            description: service?.description,
            image: service?.image,
            rating: updatedRating,
            ratingCount: service?.ratingCount
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
                            <p>Your feedback is updated.</p>
                        </div>)
                }

                setEditReview(false)
            })
            .catch(() => toast.error(
                <div className='toast toast-error'>
                    <p>Something Went Wrong.</p>
                </div>
            ))

    }

    return (
        <div className='my-review-container'>
            <form onSubmit={handleUpdateReview} className='my-review'>
                {
                    updatingReview ?
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '20%' }}>
                                <Loading></Loading>
                            </div>
                        </div>
                        :
                        <>
                            <h2 style={{ color: 'rgb(1,101,1)' }}>{serviceName}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ color: '#464646' }}>10-01-2021</p>
                                <RatingStars selectedStar={selectedStar} setSelectedStar={setSelectedStar}></RatingStars>
                            </div>

                            <textarea name='review' style={{ width: '100%', height: '100px', marginTop: '20px', outline: '2px solid rgb(1,101,1)', fontSize: '1.05rem' }} defaultValue={review}></textarea>

                            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '20px', gap: '10px' }}>

                                <button type='submit' className='edit-review-btn update-review-btn'>Update Review</button>
                                <button className='edit-review-btn discard-review-btn' onClick={() => setEditReview(false)}>Discard Changes</button>

                                <div className='my-review-icons'>
                                    <AiOutlineDelete className='my-review-icon delete-icon'></AiOutlineDelete>
                                </div>
                            </div>
                        </>
                }

            </form >
        </div >
    );
};

export default EditReview;