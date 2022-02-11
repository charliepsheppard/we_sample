import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user.data;
    default:
      return oldState;
  }
}

export default usersReducer;