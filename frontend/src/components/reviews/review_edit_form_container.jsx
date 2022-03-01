import React from 'react';
import { connect } from 'react-redux'
import { updateReview, fetchReview } from '../../actions/review_actions';
import ReviewEditForm from './review_edit_form';

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps in review edit form container', ownProps);
  return {
    review: state.entities.reviews[ownProps.match.params.reviewId],
    user: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    updateReview: review => dispatch(updateReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm);