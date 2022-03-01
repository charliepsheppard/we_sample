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
        
      // case REMOVE_SAMPLE:
      //   console.log("sample action", action.sample)
      //   delete newState[action.sample.restaurantId];
      //   return newState;

      case RECEIVE_SAMPLE:
        if (newState[action.sample.data.restaurantId] === undefined) {
              newState[action.sample.data.restaurantId] = [action.sample.data]
            } else {
              newState[action.sample.data.restaurantId].push(action.sample.data)

            }
        return newState;


      case RECEIVE_RESTAURANT_SAMPLES:
            for(let i = 0; i < action.samples.data.length; i++) {
                let allSamples = action.samples.data;
              if (newState[allSamples[i].restaurantId] === undefined) {
              newState[allSamples[i].restaurantId] = [allSamples[i]]
            } else if (newState[allSamples[i].restaurantId].includes(allSamples[i])) {
              continue
            } else {
              newState[allSamples[i].restaurantId].push(allSamples[i])
            }

          }
        // action.samples.data.forEach((sample) => {
        //   if (newState[sample.restaurantId] === undefined) {
        //     newState[sample.restaurantId] = [sample]
        //   } else if (newState[sample.restaurantId].includes(sample)) 
        //     {
              
        //     }
        //   else {
        //     newState[sample.restaurantId].push(sample)
        //   }
        // })
        return newState;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;