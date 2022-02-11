import React from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import SampleIndexItem from './sample_index_item';

const mapDispatchToProps = dispatch => {
  return {
    createOrder: order => dispatch(createOrder(order))
  };
}

export default connect(null, mapDispatchToProps)(SampleIndexItem);

