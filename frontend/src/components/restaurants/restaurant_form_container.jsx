import { connect } from "react-redux";
import { createRestaurant } from "../../actions/restaurant_actions";
import RestaurantForm from './restaurant_form';

const mSTP = (state) => {

    return {
        user: state.session.user,

    }

}

const mDTP = dispatch => ({
    createRestaurant: restaurant => dispatch(createRestaurant(restaurant))
})

export default connect(mSTP, mDTP)(RestaurantForm);