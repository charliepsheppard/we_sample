import React from 'react';
import { connect } from 'react-redux';
import { deleteSample, fetchSamplesFromRestaurant } from '../../actions/sample_actions';
import RestaurantIndexItem  from './restaurant_index_item';

const mapStateToProps = state => {
  // console.log('restaurant index item container', state.entities)
  return {
    restaurantSamples: Object.values(state.entities.samples.restaurant),
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteSample: sampleId => dispatch(deleteSample(sampleId)),
    fetchSamplesFromRestaurant: (restaurantId) => dispatch(fetchSamplesFromRestaurant(restaurantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexItem);