import React from 'react';
import { fetchUsersRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);

