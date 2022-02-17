import React from 'react';
import { fetchUsersRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';

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
    fetchUsersRestaurants: (restaurantOwnerId) => dispatch(fetchUsersRestaurants(restaurantOwnerId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);

