import  * as SampleApiUtl from '../util/sample_api_util';

export const RECEIVE_SAMPLES = "RECEIVE_SAMPLES";
// export const RECEIVE_USER_SAMPLES = "RECEIVE_USER_SAMPLES";
export const RECEIVE_SAMPLE = "RECEIVE_SAMPLE";
export const REMOVE_SAMPLE = "REMOVE_SAMPLE";
// export const UPDATE_SAMPLE = "UPDATE_SAMPLE";
export const RECEIVE_SAMPLE_ERRORS = "RECEIVE_SAMPLE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveSamples = samples => ({
  type: RECEIVE_SAMPLES,
  samples
});

export const receiveSample = sample => ({
  type: RECEIVE_SAMPLE,
  sample
});

export const removeSample = sampleId => ({
  type: REMOVE_SAMPLE,
  sampleId
})

export const recieveSampleErrors = errors => ({
  type: RECEIVE_SAMPLE_ERRORS,
  errors
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
})

export const fetchSamples = () => dispatch => (
  SampleApiUtl.fetchSamples()
    .then(samples => dispatch(receiveSamples(samples)))
    .catch(err => console.log(err))
);

export const fetchSample = (sampleId) => dispatch => (
  SampleApiUtl.fetchSample(sampleId)
    .then(sample => dispatch(receiveSample(sample)))
    .catch(err => console.log(err))
);

export const fetchSamplesFromRestaurant = (restaurantId) => dispatch => (
  SampleApiUtl.fetchSamplesFromRestaurant(restaurantId)
    .then(
      samples => dispatch(receiveSamples(samples)),
      err => dispatch(recieveSampleErrors(err.response.data))
      )
)





