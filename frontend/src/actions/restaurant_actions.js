import * as RestaurantApiUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveRestaurants = restaurants => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  };
}

export const receiveRestaurant = restaurant => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant
  };
}

export const removeRestaurant = restaurantId => {
  return {
    type: REMOVE_RESTAURANT,
    restaurantId
  };
}

export const clearRestaurants = () => {
  return {
    type: CLEAR_RESTAURANTS
  };
}

export const receiveRestaurantErrors = errors => {
  return {
    type: RECEIVE_RESTAURANT_ERRORS,
    errors
  };
}

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
}

export const fetchRestaurants = () => dispatch => {
  return RestaurantApiUtil.fetchRestaurant()
    .then(
      restaurants => dispatch(receiveRestaurants(restaurants)),
      err => dispatch(receiveRestaurantErrors(err.response.data))
    );
}

export const fetchRestaurant = restaurantId => dispatch => {
  return RestaurantApiUtil.fetchRestaurant(restaurantId)
    .then(
      restaurant => dispatch(receiveRestaurant(restaurant)),
      err => dispatch(receiveRestaurantErrors(err.response.data))
    );
}

export const updateRestaurant = restaurant => dispatch => {
  return RestaurantApiUtil.updateRestaurant(restaurant)
    .then(
      restaurant => dispatch(receiveRestaurant(restaurant)),
      err => dispatch(receiveRestaurantErrors(err.response.data))
    );
}

export const deleteRestaurant = restaurantId => dispatch => {
  return RestaurantApiUtil.deleteRestaurant(restaurantId)
    .then(
      () => dispatch(removeRestaurant(restaurantId)),
      err => dispatch(receiveRestaurantErrors(err.response.data))
    )
}

export const restaurantSearch = query => dispatch => {
  RestaurantApiUtil.restaurantSearch(query).then(restaurant => dispatch(receiveRestaurant(restaurant)));
}