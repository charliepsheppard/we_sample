import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchOrdersFromUser } from '../../actions/order_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
  orders: state.entities.orders
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchOrdersFromUser: userId => dispatch(fetchOrdersFromUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);