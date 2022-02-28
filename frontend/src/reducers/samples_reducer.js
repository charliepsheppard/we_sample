import {RECEIVE_SAMPLES, REMOVE_SAMPLE, RECEIVE_SAMPLE, RECEIVE_RESTAURANT_SAMPLES } from '../actions/sample_actions';


const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        newState = action.samples.data
        return newState;
      case REMOVE_SAMPLE:
        delete newState[action.sampleId];
        return newState;

      case RECEIVE_SAMPLE:
        return action.sample.data;


      case RECEIVE_RESTAURANT_SAMPLES:
        action.samples.data.forEach((sample) => {
          if (newState[sample.restaurantId] === undefined) {
            newState[sample.restaurantId] = [sample]
          } else {
            newState[sample.restaurantId].push(sample)
          }
        })
        return newState;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;