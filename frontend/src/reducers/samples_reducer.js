import {RECEIVE_SAMPLES, RECEIVE_SAMPLE, RECEIVE_RESTAURANT_SAMPLES } from '../actions/sample_actions';


const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        newState = action.samples.data
        return newState;
      case RECEIVE_RESTAURANT_SAMPLES:
        // console.log('Samples reducer', action)
        action.samples.data.forEach((sample) => {
          if (newState[sample.restaurantId] === undefined) {
            newState[sample.restaurantId] = [sample]
          } else {
            newState[sample.restaurantId].push(sample)
          }
        })
        return newState;
      case RECEIVE_SAMPLE:
        return action.sample.data;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;