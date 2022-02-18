import React from 'react';
import { fetchUsersRestaurants, deleteRestaurant } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createSample } from '../../actions/sample_actions';
import { fetchSamplesFromRestaurant } from '../../actions/sample_actions';

const mapStateToProps = state => {
  console.log(state.entities.restaurants);
  return {
    restaurants: Object.values(state.entities.restaurants),
    user: state.session.user,
  };
}

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    fetchUsersRestaurants: (restaurantOwnerId) => dispatch(fetchUsersRestaurants(restaurantOwnerId)),
    fetchSamplesFromRestaurant: (restaurantId) => dispatch(fetchSamplesFromRestaurant(restaurantId)),
    deleteRestaurant: (restaurantId) => dispatch(deleteRestaurant(restaurantId)),
    createSample: (sample) => dispatch(createSample(sample)),
    // otherForm: (
    //   <button onClick={() => dispatch(openModal('createSample'))}>
    //     Create Sample
    //   </button>
    // ),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);

