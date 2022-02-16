import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/user_actions';

const mSTP = state => {
    console.log(state)
    return {
        user: state.session.user,
    }
}

const mDTP = dispatch => {
    return {
        updateUser: () => dispatch(updateUser())
    }
}

export default connect(mSTP, mDTP)(UserProfile);



