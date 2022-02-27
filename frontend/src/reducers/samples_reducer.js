import {RECEIVE_SAMPLES, REMOVE_SAMPLE } from '../actions/sample_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';


const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        newState = action.samples.data
        return newState;
      case RECEIVE_RESTAURANT:
        newState[action.restaurant.data._id] = action.restaurant.data
        return newState;
      case REMOVE_SAMPLE:
        delete newState[action.sampleId];
        return newState;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;