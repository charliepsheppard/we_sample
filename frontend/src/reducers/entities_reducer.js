import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import SamplesReducer from './samples_reducer';
import orderReducer from './orders_reducer'

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  samples: SamplesReducer,
  orders: orderReducer
});

export default entitiesReducer;