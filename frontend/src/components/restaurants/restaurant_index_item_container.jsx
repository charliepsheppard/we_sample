import React from 'react';
import { connect } from 'react-redux';
import { deleteSample, fetchSamplesFromRestaurant } from '../../actions/sample_actions';
import RestaurantIndexItem  from './restaurant_index_item';
import { deleteRestaurant } from '../../actions/restaurant_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    restaurantSamples: state.entities.samples[ownProps.restaurant._id],
    user: state.session.user,
    restaurantName: ownProps.restaurant.restaurantName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteSample: sampleId => dispatch(deleteSample(sampleId)),
    fetchSamplesFromRestaurant: (restaurantId) => dispatch(fetchSamplesFromRestaurant(restaurantId)),
    deleteRestaurant: (restaurantId) => dispatch(deleteRestaurant(restaurantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexItem);