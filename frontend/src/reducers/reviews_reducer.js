import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions";

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_REVIEWS:
      let updatedState = {};
      action.reviews.data.forEach((review) => {
        updatedState[review._id] = review;
      });
      return updatedState

    case RECEIVE_REVIEW:
      newState[action.review._id] = action.review
      return newState


    case REMOVE_REVIEW:
      delete newState[action.reviewId]
      return newState

    default: 
      return oldState
  }
}

export default reviewsReducer