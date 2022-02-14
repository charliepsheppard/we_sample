import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  }
}

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

export const fetchReviewsFromRestaurant = restaurantId => dispatch => {
  return ReviewApiUtil.fetchReviewsFromRestaurant(restaurantId)
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const fetchReviewsFromSample = sampleId => dispatch => {
  return ReviewApiUtil.fetchReviewsFromRestaurant(sampleId)
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const fetchReviewsFromUser = userId => dispatch => {
  return ReviewApiUtil.fetchReviewsFromUser(userId)
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const fetchReview = reviewId => dispatch => {
  return ReviewApiUtil.fetchReview(reviewId)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const createReview = review => dispatch => {
  // debugger
  return ReviewApiUtil.createReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const updateReview = review => dispatch => {
  return ReviewApiUtil.updateReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.deleteReview(reviewId)
    .then(
      () => dispatch(removeReview(reviewId)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}
