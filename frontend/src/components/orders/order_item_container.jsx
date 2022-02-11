import React from 'react';
import { connect } from 'react-redux';
import OrderItem from './order_item';
import {fetchUser} from '../../actions/user_actions';
import {fetchSample} from '../../actions/sample_actions';
import {fetchRestaurant} from '../../actions/restaurant_actions'

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSample: (sampleId) => dispatch(fetchSample(sampleId)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))

})

export default connect(null, mDTP)(OrderItem);