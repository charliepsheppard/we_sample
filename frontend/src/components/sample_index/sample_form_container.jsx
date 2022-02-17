import { connect } from "react-redux";
import { createSample } from "../../actions/sample_actions";
import SampleForm from './sample_form';

const mSTP = (state, ownProps) => {
    return {
        user: state.session.user,
        restaurantId:
    }
}