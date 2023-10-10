export const countAvgRating = (prevRating, ratingCount, newRating) => {
    const newRatingCount = ratingCount + 1;
    let avgRating = ((prevRating * ratingCount) + newRating) / newRatingCount;
    avgRating = avgRating.toFixed(1);

    return ({ avgRating, newRatingCount })
}

