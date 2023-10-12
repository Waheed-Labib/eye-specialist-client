import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import './MyReviews.css'
import { FaStar } from 'react-icons/fa';
import MyReview from './MyReview/MyReview';
import toast from 'react-hot-toast';

const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        fetch(`https://eye-specialist-server.vercel.app/user-reviews/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(() => setDataNotFound(true))
    }, [user?.uid])

    return (
        <div className='section my-reviews-section'>
            <h1 style={{ marginBottom: '10%' }} className='section-heading'>
                <FaStar></FaStar> My Reviews
            </h1>

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




        </div >
    );
};

export default MyReviews;