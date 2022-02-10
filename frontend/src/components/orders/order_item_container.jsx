import { fetchSample } from '../../actions/sample_actions'
//check this actions file exists in parallel
// import { fetchUser } from '../../actions/user_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import OrderItem from './order_item';

const mapStateToProps = (state) => ({
  // user: state.entities.users,
  // style: state.entities.style,
  // stylist: state.entities.stylists
})

const mapDispatchToProps = (dispatch) => ({
  fetchSample: (sampleId) => dispatch(fetchSample(sampleId)),
//   fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem)