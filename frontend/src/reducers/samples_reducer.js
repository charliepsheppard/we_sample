import {RECEIVE_SAMPLES, RECEIVE_SAMPLE, RECEIVE_RESTAURANT_SAMPLES } from '../actions/sample_actions';


const SamplesReducer = (state = {all: {}, restaurant: [] }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        newState.all = action.samples.data
        return newState;
      case RECEIVE_RESTAURANT_SAMPLES:
        // console.log('Samples reducer', action)
        newState.restaurant = action.samples.data
        return newState
      case RECEIVE_SAMPLE:
        return action.sample.data;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;