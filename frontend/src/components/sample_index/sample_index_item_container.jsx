import React from 'react';
import { connect } from 'react-redux';
import { createOrder, fetchOrdersFromUser } from '../../actions/order_actions';
import { deleteSample, fetchSample } from '../../actions/sample_actions';
import SampleIndexItem from './sample_index_item';
import { fetchSamplesFromRestaurant } from '../../actions/sample_actions'
import { fetchUsersRestaurants } from '../../actions/restaurant_actions';

// const mapStateToProps = (state, ownProps) => {
//   // console.log('state in sample container', ownProps)
//   return {
//     // sample: state.entities.sample
//   }
// }

const mapDispatchToProps = dispatch => {
  
  return {
    createOrder: order => dispatch(createOrder(order)),
    deleteSample: (sampleId, sample) => dispatch(deleteSample(sampleId, sample)),
    fetchSamplesFromRestaurant: (restaurantId) => dispatch(fetchSamplesFromRestaurant(restaurantId)),
    fetchSample: (sampleId) => dispatch(fetchSample(sampleId)),
    fetchUsersRestaurants: (restaurantOwnerId) => dispatch(fetchUsersRestaurants(restaurantOwnerId)),
    fetchOrdersFromUser: (userId) => dispatch(fetchOrdersFromUser(userId))
  };
}

export default connect(null, mapDispatchToProps)(SampleIndexItem);

