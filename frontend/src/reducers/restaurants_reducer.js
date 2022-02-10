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
      return action.restaurants.data;
    case RECEIVE_RESTAURANT:
      return action.restaurant.data;
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
