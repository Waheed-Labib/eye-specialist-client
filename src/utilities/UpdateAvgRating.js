export const updateAvgRating = (prevRatingByUser, updatedRatingByUser, prevRating, ratingCount) => {
    let updatedRating = ((prevRating * ratingCount) + (updatedRatingByUser - prevRatingByUser)) / ratingCount;
    updatedRating = updatedRating.toFixed(1);

    return updatedRating;
} 