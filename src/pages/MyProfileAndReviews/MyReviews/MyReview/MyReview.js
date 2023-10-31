import React, { useEffect, useState } from 'react';
import ShowRating from '../../../ServiceDetails/ShowRating/ShowRating';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import './MyReview.css'
import EditReview from './EditReview/EditReview';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { updateAvgRatingAfterDelete } from '../../../../utilities/UpdateAvgRatingAfterDelete';
import Loading from '../../../shared/Loading/Loading';

const MyReview = ({ myReview, myReviews, setMyReviews }) => {

    const { serviceId, serviceName, rating, review, date } = myReview;

    const reviewYear = date.split('-')[0];
    const reviewMonth = date.split('-')[1];
    const reviewDay = date.split('-')[2];

    const reviewDate = reviewDay + '-' + reviewMonth + '-' + reviewYear;

    const [service, setService] = useState(null)

    useEffect(() => {
        fetch(`https://eye-specialist-server.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(() => alert('Please Check Your Internet Connection.'))
    }, [serviceId])

    const reviewParagraphs = review.split('\n\n');

    const [editReview, setEditReview] = useState(false);

    const [deletingReview, setDeletingReview] = useState(false);

    const handleDeleteReview = () => {

        const agree = window.confirm('Delete the review?')

        if (!agree) return

        setDeletingReview(true)

        fetch(`https://eye-specialist-server.vercel.app/reviews/${myReview?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(
                        <div className='toast toast-success'>
                            <p>Deletion Successful</p>
                        </div>
                    )

                    const updatedMyReviews = myReviews.filter(review => review?._id !== myReview?._id)

                    setMyReviews(updatedMyReviews)

                    setDeletingReview(false)
                }
            })
            .catch(() => toast.error(
                <div className='toast toast-error'>
                    <p>Failed to Delete</p>
                </div>
            ))

        // update new rating in the service data

        const updatedRating = updateAvgRatingAfterDelete(myReview?.rating, service?.rating, service?.ratingCount)

        const newService = {
            rating: updatedRating,
            ratingCount: service?.ratingCount - 1
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

                }


            })
            .catch(() => toast.error(
                <div className='toast toast-error'>
                    <p>Something Went Wrong.</p>
                </div>
            ))
    }

    if (editReview) return <EditReview service={service} setEditReview={setEditReview} myReview={myReview} myReviews={myReviews} setMyReviews={setMyReviews}></EditReview>

    return (
        <div className='my-review-container'>
            <div className='my-review'>
                {
                    deletingReview ?
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '20%' }}>
                                <Loading></Loading>
                            </div>
                        </div>
                        :
                        <>
                            <Link className='green-link link-without-underline' to={`/service-details/${serviceId}`}>
                                <h2 style={{ color: 'rgb(1,101,1)' }}>{serviceName}</h2>
                            </Link>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ color: '#464646' }}>{reviewDate}</p>
                                <ShowRating rating={rating} ratingPosition='service-details'></ShowRating>
                            </div>
                            <div style={{ fontSize: '1.1rem' }}>
                                {
                                    reviewParagraphs.map(reviewParagraph => <p key={reviewParagraphs.indexOf(reviewParagraph)}>{reviewParagraph}</p>)
                                }
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <p style={{ color: '#464646' }}>reviewed by you</p>

                                <div className='my-review-icons'>
                                    <FaEdit onClick={() => setEditReview(true)} className='my-review-icon edit-icon'></FaEdit>

                                    <AiOutlineDelete onClick={handleDeleteReview} className='my-review-icon delete-icon'></AiOutlineDelete>

                                </div>


                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default MyReview;