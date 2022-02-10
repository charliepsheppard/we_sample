import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer
});

export default entitiesReducer;