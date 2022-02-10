import React from 'react';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);

