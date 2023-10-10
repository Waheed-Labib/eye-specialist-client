export const updateAvgRating = (prevRatingByUser, updatedRatingByUser, prevRating, ratingCount) => {
    const updatedRating = (prevRating + (updatedRatingByUser - prevRatingByUser)) / ratingCount;
    return ratingCount;
} 