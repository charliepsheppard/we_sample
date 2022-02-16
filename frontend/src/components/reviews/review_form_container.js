import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
    console.log('state in review form container', state)

    return{user: state.session.user,
    resaurant: state.entities.resaurant,
    order: ownProps.order,
    // samples: Object.values({}, state.entities.restaurant.samples)
    }
};

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mSTP,mDTP)(ReviewForm);