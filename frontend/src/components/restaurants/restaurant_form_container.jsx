import { connect } from "react-redux";
import { createRestaurant } from "../../actions/restaurant_actions";
import RestaurantForm from './restaurant_form';

const mSTP = (state) => {

}

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(RestaurantForm);