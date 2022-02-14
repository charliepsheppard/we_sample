import React from 'react';
import { connect } from 'react-redux';
import { createOrder, fetchOrdersFromUser } from '../../actions/order_actions';
import SampleIndexItem from './sample_index_item';

const mapDispatchToProps = dispatch => {
  return {
    createOrder: order => dispatch(createOrder(order)),
    fetchOrdersFromUser: userId => dispatch(fetchOrdersFromUser(userId))
  };
}

export default connect(null, mapDispatchToProps)(SampleIndexItem);

