import React from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import { deleteSample } from '../../actions/sample_actions';
import SampleIndexItem from './sample_index_item';

const mapStateToProps = state => {
  return {
    sample: state.entities.sample
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: order => dispatch(createOrder(order)),
    deleteSample: sampleId => dispatch(deleteSample(sampleId)),
  };
}

export default connect(null, mapDispatchToProps)(SampleIndexItem);

