import axios from "axios";

export const fetchReviewsFromRestaurant = (restaurantId) => {
  return axios.get(`/api/reviews/restaurant/${restaurantId}`)
}

export const fetchReviewsFromSample = (sampleId) => {
  return axios.get(`/api/reviews/sample/${sampleId}`)
}

export const fetchReviewsFromUser = (userId) => {
  return axios.get(`/api/reviews/reviewer/${userId}`)
}

export const fetchReview = (reviewId) => {
  return axios.get(`/api/reviews/${reviewId}`)
}

export const createReview = (review) => {
  return axios.post(`/api/reviews/${review.stylistId}`, review)
}

export const updateReview = (review) => {
  return axios.patch(`/api/reviews/${review.id}`, review)
}

export const deleteReview = (reviewId) => {
  return axios.delete(`/api/reviews/${reviewId}`)
}