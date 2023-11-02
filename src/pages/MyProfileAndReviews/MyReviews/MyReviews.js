import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import './MyReviews.css'
import { FaStar } from 'react-icons/fa';
import MyReview from './MyReview/MyReview';
import toast from 'react-hot-toast';
import Loading from '../../shared/Loading/Loading';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);
    const [myReviewsLoading, setMyReviewsLoading] = useState(false);

    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        setMyReviewsLoading(true);
        fetch(`https://eye-specialist-server.vercel.app/user-reviews/${user?.uid}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('dr-bean-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error(
                        <div className='toast toast-error'>
                            <p>Access Denied</p>
                            <p>Please Login Again.</p>
                        </div>
                    )

                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)
                setMyReviewsLoading(false)
            })
            .catch(() => setDataNotFound(true))
    }, [user?.uid, logOut])

    return (
        <div className='section my-reviews-section'>
            <h1 className='section-heading'>
                <FaStar></FaStar> My Reviews
            </h1>
            <div className='sort-by'>
                <p>
                    <small>Sorted by :</small>
                </p>

                <p style={{ padding: '5px', borderRadius: '2px', backgroundColor: 'rgb(220,220,220)' }}>
                    <small>Newest first</small>
                </p>
            </div>

            {
                myReviewsLoading ?
                    <Loading></Loading>
                    :
                    <>
                        {
                            dataNotFound ?

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25%', marginBottom: '15%' }}>
                                    < p style={{ fontSize: '2rem', fontStyle: 'italic', color: 'maroon' }}>Please Check Your Internet Connection</p>
                                </div>
                                :
                                <>
                                    {
                                        myReviews.length ?
                                            <div>
                                                {
                                                    myReviews.map(myReview => <MyReview key={myReviews.indexOf(myReview)} myReview={myReview} myReviews={myReviews} setMyReviews={setMyReviews}></MyReview>)
                                                }
                                            </div>
                                            :
                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25%', marginBottom: '15%' }}>
                                                <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>You have not added any reviews yet</p>
                                            </div>
                                    }
                                </>
                        }
                    </>
            }

        </div >
    );
};

export default MyReviews;