import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import fetchReviewsFromSample from '../../actions/review_actions';

const mSTP = (state) => {
    return {reviews: Object.values(state.entities.reviews)}
};

const mDTP = dispatch => ({
    fetchReviewsFromSample: (sampleId) => dispatch(fetchReviewsFromSample(sampleId))
});

export default connect(mSTP, mDTP)(ReviewIndex);