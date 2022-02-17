import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT,
  CLEAR_RESTAURANTS
} from '../actions/restaurant_actions';

const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      let updatedState = {};
      console.log('From the restaurant reducer', action)
      action.restaurants.data.forEach(restaurant => {
          updatedState[restaurant._id] = restaurant;
      });
      return updatedState

    case RECEIVE_RESTAURANT:
      newState[action.restaurant.data._id] = action.restaurant.data;
      return newState
    case REMOVE_RESTAURANT:
      delete newState[action.restaurantId]
      return newState;
    case CLEAR_RESTAURANTS:
      return {};
    default:
      return oldState;
  }
}

export default restaurantReducer;
