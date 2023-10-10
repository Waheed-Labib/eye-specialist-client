export const updateAvgRating = (prevRatingByUser, updatedRatingByUser, prevRating, ratingCount) => {
    const updatedRating = ((prevRating * ratingCount) + (updatedRatingByUser - prevRatingByUser)) / ratingCount;
    return updatedRating;
} 