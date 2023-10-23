export const updateAvgRatingAfterDelete = (prevRatingByUser, prevRating, prevRatingCount) => {
    let updatedAvgRating = ((prevRating * prevRatingCount) - prevRatingByUser) / (prevRatingCount - 1)

    if (isNaN(updatedAvgRating)) {
        return null
    }

    updatedAvgRating = updatedAvgRating.toFixed(1);
    return updatedAvgRating
}