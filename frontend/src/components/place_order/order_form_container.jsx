import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import {fetchSamples, fetchSamplesFromRestaurant} from '../../actions/sample_actions';
import OrderForm from './order_form';
import {fetchRestaurant} from '../../actions/restaurant_actions'


const mSTP = state => ({
    user: state.session.user,
    restaurant: state.entities.restraurants,
    samples: Object.values(state.entities.samples),
    errors: state.errors.orders
});

const mDTP = (dispatch) => ({
    createOrder: order => dispatch(createOrder(order)),
    fetchSamples: () => dispatch(fetchSamples()),
    fetchSamplesFromRestaurant: (restaurantId) => dispatch(fetchSamplesFromRestaurant(restaurantId)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(OrderForm);