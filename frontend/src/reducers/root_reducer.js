import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import errors from './errors_reducer'
import modalReducer from './modal_reducer';
import entitiesReducer from './entities_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors,
  session: sessionApiReducer,
  modal: modalReducer
});

export default rootReducer;