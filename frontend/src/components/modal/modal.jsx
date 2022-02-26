import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SampleFormContainer from '../sample_index/sample_form_container';
import ReviewFormContainer from '../reviews/review_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.method) {
    case 'createSample':
      // console.log('state in modal', state)
      component = <SampleFormContainer restaurantId={modal.restaurantId} />;
      break;
    case 'updateReview':
      component = <ReviewFormContainer review={modal.review} method={modal.method} />
    default: 
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);