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
      
        console.log('samples in reducer',action.samples)
        action.samples.data.forEach((sample) => {
          if (newState[sample.restaurantId] === undefined) {
            newState[sample.restaurantId] = [sample]
            console.log(action)
          } else {
            // console.log
            newState[sample.restaurantId].push(sample)
          }
        })
        return newState;
      // case RECEIVE_SAMPLE:
      //   console.log('new state in samples reducer', newState)
      //   newState.entities.restaurants[action.sample.data.restaurantId].push(action.sample)
      //   return newState;
      case REMOVE_SAMPLE:
        delete newState[action.sampleId];
        return newState;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;