import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import SamplesReducer from './samples_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  samples: SamplesReducer
});

export default entitiesReducer;