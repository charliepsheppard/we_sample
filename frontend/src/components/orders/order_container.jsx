import { fetchSample } from '../../actions/sample_actions'
//check this actions file exists in parallel
import { fetchUser } from '../../actions/user_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchOrderfromRestaurant, fetchOrdersFromUser, deleteOrder } from '../../actions/order_actions'
import { connect } from 'react-redux';
import Orders from './orders';

const mapStateToProps = (state) => ({
  user: state.entities.user,
  orders: Object.values(state.entities.orders),

})

const mapDispatchToProps = (dispatch) => ({
  fetchSample: (sampleId) => dispatch(fetchSample(sampleId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
  fetchOrderfromRestaurant: (restaurantId) => dispatch(fetchOrderfromRestaurant(restaurantId)),
  fetchOrdersFromUser: (userId) => dispatch(fetchOrdersFromUser(userId)),
  deleteOrder: (orderId) => dispatch(deleteOrder(orderId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)