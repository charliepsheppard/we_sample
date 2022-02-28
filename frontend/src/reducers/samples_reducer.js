import {RECEIVE_SAMPLES, REMOVE_SAMPLE, RECEIVE_SAMPLE, RECEIVE_RESTAURANT_SAMPLES } from '../actions/sample_actions';


const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        action.samples.data.forEach((sample) => {
          if (newState[sample.restaurantId] === undefined) {
            newState[sample.restaurantId] = [sample]
          } else {
            newState[sample.restaurantId].push(sample)
          }
        })
        return newState;
        
      case REMOVE_SAMPLE:
        delete newState[action.sample.data.restaurantId];
        return newState;

      case RECEIVE_SAMPLE:
        newState[action.sample.data.restaurantId].push(action.sample.data)
        return newState;


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