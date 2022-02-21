import React from 'react';
import { fetchUsersRestaurants, deleteRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createSample } from '../../actions/sample_actions';
import { fetchSamplesFromRestaurant } from '../../actions/sample_actions';

const mapStateToProps = state => {
  // console.log("restaurant index container", state.entities);
  return {
    restaurants: Object.values(state.entities.restaurants),
    user: state.session.user,
  };
}

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    fetchUsersRestaurants: (restaurantOwnerId) => dispatch(fetchUsersRestaurants(restaurantOwnerId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    deleteRestaurant: (restaurantId) => dispatch(deleteRestaurant(restaurantId)),
    createSample: (sample) => dispatch(createSample(sample)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);

