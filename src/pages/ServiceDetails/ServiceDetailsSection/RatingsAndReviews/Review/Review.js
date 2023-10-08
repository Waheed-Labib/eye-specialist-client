import React, { useEffect, useState } from 'react';
import './Review.css'
import ShowRating from '../../../ShowRating/ShowRating';

const Review = ({ review, index }) => {

    const [showFullReview, setShowFullReview] = useState(false);

    const reviewDescriptions = review.review.split('\n\n');

    // to find the screen width
    const [width, setWidth] = useState(0)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    const handleShowFullReview = () => {
        setShowFullReview(true);

        // scroll down 600px when the review is shown full
        if (index % 2 && width > 768) window.scrollBy(0, 600)
    }

    const handleShowLessReview = () => {
        setShowFullReview(false);

        // scroll up 600px when the review is shown less
        if (index % 2 && width > 768) window.scrollBy(0, -600)
    }

    return (
        <div className={`review ${showFullReview && 'full-review'}`}>
            <div className='review-top-section'>
                <img src={review.userImage} alt=''></img>
                <p>{review.userName}</p>
            </div>

            <div className='review-center-section'>
                {
                    review.review.length <= 90 &&

                    reviewDescriptions.map(reviewDescription => <p key={reviewDescriptions.indexOf(reviewDescription)}>{reviewDescription}</p>)
                }

                {
                    review.review.length > 90 &&
                    <>
                        {
                            showFullReview ?
                                <>
                                    {
                                        reviewDescriptions.map(reviewDescription => <p>{reviewDescription}</p>)
                                    }
                                    <p onClick={handleShowLessReview} className='yellow-underlined-text'>Show Less</p>
                                </>

                                :

                                <>
                                    <p>{review.review.substr(0, 90)} ...</p>
                                    <p onClick={handleShowFullReview} className='yellow-underlined-text'>Show Full Review</p>
                                </>
                        }
                    </>

                }
            </div>

            <div className='review-bottom-section'>

                <ShowRating rating={review.rating} ratingPosition='review'></ShowRating>

                <p>01-10-2023</p>
            </div>
        </div>
    );
};

export default Review;