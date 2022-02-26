import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviewsFromSample, fetchReviewsFromUser, deleteReview, updateReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        user: state.session.user,
    }
};

const mDTP = dispatch => ({
    fetchReviewsFromSample: (sampleId) => dispatch(fetchReviewsFromSample(sampleId)),
    fetchReviewsFromUser: (userId) => dispatch(fetchReviewsFromUser(userId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateReview: (review) => dispatch(updateReview(review)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(ReviewIndex);