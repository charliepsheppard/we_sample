import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT,
  CLEAR_RESTAURANTS
} from '../actions/restaurant_actions';

import {
  RECEIVE_SAMPLE, RECEIVE_RESTAURANT_SAMPLES
} from '../actions/sample_actions';

const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      let updatedState = {};

      action.restaurants.data.forEach(restaurant => {
          updatedState[restaurant._id] = restaurant;
      });
      return updatedState

    // case RECEIVE_RESTAURANT:
    //   newState[action.restaurant.data._id] = action.restaurant.data;
    //   return newState
    case REMOVE_RESTAURANT:
      delete newState[action.restaurantId]
      return newState;
    case CLEAR_RESTAURANTS:
      return {};

    // case RECEIVE_SAMPLE:
    //     console.log('new state in samples reducer', newState)
    //     newState[action.sample.data.restaurantId].samples.push(action.sample.data)
    //     return newState;

    // case RECEIVE_RESTAURANT_SAMPLES:

    //     console.log('samples in reducer', action.samples)
    //     action.samples.data.forEach((sample) => {
    //         newState[sample.restaurantId].samples.push(sample)          
    //     })
    //     return newState;
    default:
      return oldState;
  }
}

export default restaurantReducer;
