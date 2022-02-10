import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  errors,
  session
});

export default RootReducer;