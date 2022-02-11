import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
}

export const fetchUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
}

export const updateUser = user => dispatch => {
  return UserAPIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)));
}

