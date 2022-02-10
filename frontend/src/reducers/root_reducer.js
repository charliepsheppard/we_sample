import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import errors from './errors_reducer'
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors,
  session: sessionApiReducer
});

export default rootReducer;