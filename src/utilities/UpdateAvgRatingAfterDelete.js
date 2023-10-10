export const updateAvgRatingAfterDelete = (prevRatingByUser, prevRating, prevRatingCount) => {
    let updatedAvgRating = ((prevRating * prevRatingCount) - prevRatingByUser) / (prevRatingCount - 1)
    updatedAvgRating = updatedAvgRating.toFixed(1);
    return updatedAvgRating
}