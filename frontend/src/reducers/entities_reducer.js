import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import usersReducer from './users_reducer';
import SamplesReducer from './samples_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  samples: SamplesReducer,
  users: usersReducer
});

export default entitiesReducer;