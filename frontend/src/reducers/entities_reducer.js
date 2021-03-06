import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import usersReducer from './users_reducer';
import SamplesReducer from './samples_reducer';
import orderReducer from './orders_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  samples: SamplesReducer,
  orders: orderReducer,
  users: usersReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;