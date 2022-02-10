import { connect } from 'react-redux';
import { fetchSamples, fetchSample } from '../../actions/sample_actions'
import SampleIndex from './sample_index';

const mapStateToProps = (state) => {
  return {
    samples: Object.values(state.entities.samples)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSamples: () => dispatch(fetchSamples()),
    fetchSample: (id) => dispatch(fetchSample())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleIndex);