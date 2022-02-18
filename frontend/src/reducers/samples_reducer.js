import {RECEIVE_SAMPLES, RECEIVE_SAMPLE } from '../actions/sample_actions';


const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        console.log('Samples reducer', action)
        return action.samples.data;
      case RECEIVE_SAMPLE:
        return action.sample.data;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;