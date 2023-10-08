import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const RatingStars = ({ selectedStar, setSelectedStar }) => {

    const [star1Hover, setStar1Hover] = useState(false);
    const [star2Hover, setStar2Hover] = useState(false);
    const [star3Hover, setStar3Hover] = useState(false);
    const [star4Hover, setStar4Hover] = useState(false);
    const [star5Hover, setStar5Hover] = useState(false);

    const handleStarHover = count => {
        if (count === 1) {
            setStar1Hover(true)
        }
        if (count === 2) {
            setStar1Hover(true)
            setStar2Hover(true)
        }
        if (count === 3) {
            setStar1Hover(true)
            setStar2Hover(true)
            setStar3Hover(true)
        }
        if (count === 4) {
            setStar1Hover(true)
            setStar2Hover(true)
            setStar3Hover(true)
            setStar4Hover(true)
        }
        if (count === 5) {
            setStar1Hover(true)
            setStar2Hover(true)
            setStar3Hover(true)
            setStar4Hover(true)
            setStar5Hover(true)
        }
    }

    const handleStarLeave = () => {
        setStar1Hover(false)
        setStar2Hover(false)
        setStar3Hover(false)
        setStar4Hover(false)
        setStar5Hover(false)
    }


    return (
        <div className='rating-stars'>
            {
                star1Hover || selectedStar >= 1 ?
                    <FaStar onClick={() => setSelectedStar(1)} onMouseLeave={handleStarLeave}></FaStar>
                    :
                    <FaRegStar onMouseOver={() => handleStarHover(1)}></FaRegStar>
            }

            {
                star2Hover || selectedStar >= 2 ?
                    <FaStar onClick={() => setSelectedStar(2)} onMouseLeave={handleStarLeave}></FaStar>
                    :
                    <FaRegStar onMouseOver={() => handleStarHover(2)}></FaRegStar>
            }

            {
                star3Hover || selectedStar >= 3 ?
                    <FaStar onClick={() => setSelectedStar(3)} onMouseLeave={handleStarLeave}></FaStar>
                    :
                    <FaRegStar onMouseOver={() => handleStarHover(3)}></FaRegStar>
            }


            {
                star4Hover || selectedStar >= 4 ?
                    <FaStar onClick={() => setSelectedStar(4)} onMouseLeave={handleStarLeave}></FaStar>
                    :
                    <FaRegStar onMouseOver={() => handleStarHover(4)}></FaRegStar>
            }

            {
                star5Hover || selectedStar >= 5 ?
                    <FaStar onClick={() => setSelectedStar(5)} onMouseLeave={handleStarLeave}></FaStar>
                    :
                    <FaRegStar onMouseOver={() => handleStarHover(5)}></FaRegStar>
            }

        </div>
    );
};

export default RatingStars;