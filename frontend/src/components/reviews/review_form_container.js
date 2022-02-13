import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from './review_form';

const mSTP = (state) => ({
    user: state.session.user,
    resaurant: state.entities.resaurant,
    samples: Object.values({}, state.entities.restaurant.samples)
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mSTP,mDTP)(ReviewForm);