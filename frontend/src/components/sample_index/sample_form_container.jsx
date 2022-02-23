import { connect } from "react-redux";
import { createSample } from "../../actions/sample_actions";
import { closeModal } from '../../actions/modal_actions';
import { fetchSamplesFromRestaurant } from "../../actions/sample_actions";
import SampleForm from './sample_form';

const mSTP = (state, ownProps) => {
    // console.log('own props in sample form container', ownProps)
    return {
        user: state.session.user,
    }
};

const mDTP = dispatch => ({
    createSample: sample => dispatch(createSample(sample)),
    closeModal: () => dispatch(closeModal()),
    fetchSamplesFromRestaurant: (restaurantId) => dispatch(fetchSamplesFromRestaurant(restaurantId))
});

export default connect(mSTP, mDTP)(SampleForm);