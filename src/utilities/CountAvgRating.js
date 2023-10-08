export const countAvgRating = (prevRating, ratingCount, newRating) => {
    const newRatingCount = ratingCount + 1;
    const avgRating = ((prevRating * ratingCount) + newRating) / newRatingCount;

    return ({ avgRating, newRatingCount })
}

