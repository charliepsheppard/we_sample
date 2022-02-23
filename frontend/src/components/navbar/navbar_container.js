import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchOrdersFromUser } from '../../actions/order_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchSamples } from '../../actions/sample_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  // console.log(Object.values(state.entities.samples), 'this is the state from navbar')
  return {
    samples: Object.values(state.entities.samples),
    restaurants: Object.values(state.entities.restaurants),
    loggedIn: state.session.isAuthenticated,
    user: state.session.user,
    orders: state.entities.orders
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchOrdersFromUser: userId => dispatch(fetchOrdersFromUser(userId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchSamples: () => dispatch(fetchSamples())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);