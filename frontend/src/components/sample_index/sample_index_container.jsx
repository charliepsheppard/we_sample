import { connect } from 'react-redux';
import { fetchSamples, fetchSample } from '../../actions/sample_actions'
import { fetchOrdersFromUser } from '../../actions/order_actions';
import SampleIndex from './sample_index';

const mapStateToProps = (state) => {
  return {
    samples: Object.values(state.entities.samples),
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSamples: () => dispatch(fetchSamples()),
    fetchSample: (id) => dispatch(fetchSample()),
    fetchOrdersFromUser: userId => dispatch(fetchOrdersFromUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleIndex);