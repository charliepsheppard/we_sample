import React from 'react';
import { fetchUsersRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants),
    user: state.session.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersRestaurants: (restaurantOwnerId) => dispatch(fetchUsersRestaurants(restaurantOwnerId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);

