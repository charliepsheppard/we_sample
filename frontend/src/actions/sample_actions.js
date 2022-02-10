import  { getSamples, getSample } from '../util/sample_api_util';

export const RECEIVE_SAMPLES = "RECEIVE_SAMPLES";
export const RECEIVE_USER_SAMPLES = "RECEIVE_USER_SAMPLES";
export const RECEIVE_SAMPLE= "RECEIVE_SAMPLE";

export const receiveSamples = samples => ({
  type: RECEIVE_SAMPLES,
  samples
});

export const receiveSample = sample => ({
  type: RECEIVE_SAMPLE,
  sample
});

export const fetchSamples = () => dispatch => (
  getSamples()
    .then(samples => dispatch(receiveSamples(samples)))
    .catch(err => console.log(err))
);

export const fetchSample = () => dispatch => (
  getSample()
    .then(sample => dispatch(receiveSample(sample)))
    .catch(err => console.log(err))
);

