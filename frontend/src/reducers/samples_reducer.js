import {RECEIVE_SAMPLES, RECEIVE_SAMPLE, RECEIVE_RESTAURANT_SAMPLES, REMOVE_SAMPLE } from '../actions/sample_actions';


const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
      case RECEIVE_SAMPLES:
        newState = action.samples.data
        return newState;
      case RECEIVE_RESTAURANT_SAMPLES:
        // console.log('Samples reducer', action)
        // if (action.samples.data.length === 0) {
        //   return newState[action.restaurantId] = []
        // }
        action.samples.data.forEach((sample) => {
          // debugger;
          if (newState[sample.restaurantId] === undefined) {
            // debugger;
            newState[sample.restaurantId] = [sample]
          } else {
            // debugger;
            newState[sample.restaurantId].push(sample)
          }
        })
        return newState;
        // let updatedState = {};
        // action.samples.data.forEach((sample) => {
        //   updatedState[sample.restaurantId] = sample
        // })
        // console.log(updatedState);
        // return updatedState;
      case RECEIVE_SAMPLE:
        return action.sample.data;
      case REMOVE_SAMPLE:
        console.log('I am in the samples reducer', newState);
        delete newState[action.sampleId];
        return newState;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;