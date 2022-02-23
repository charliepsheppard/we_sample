import { fetchSample } from '../../actions/sample_actions'
import { fetchUser } from '../../actions/user_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchOrdersFromRestaurant, fetchOrdersFromUser, deleteOrder } from '../../actions/order_actions'
import { connect } from 'react-redux';
import Orders from './orders';

const mapStateToProps = (state) => {
  console.log('state in orders container', state)
  return {
    user: state.session.user,
    orders: Object.values(state.entities.orders),
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSample: (sampleId) => dispatch(fetchSample(sampleId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
  fetchOrdersFromRestaurant: (restaurantId) => dispatch(fetchOrdersFromRestaurant(restaurantId)),
  fetchOrdersFromUser: (userId) => dispatch(fetchOrdersFromUser(userId)),
  deleteOrder: (orderId) => dispatch(deleteOrder(orderId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)