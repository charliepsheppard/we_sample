import  * as SampleApiUtl from '../util/sample_api_util';

export const RECEIVE_SAMPLES = "RECEIVE_SAMPLES";
export const RECEIVE_RESTAURANT_SAMPLES = "RECEIVE_RESTAURANT_SAMPLES"
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

export const receiveRestaurantSamples = (samples, restaurantId) => {
  // console.log('samples in action', samples)
  return {
    type: RECEIVE_RESTAURANT_SAMPLES,
    samples,
    restaurantId
  }
}

export const receiveSample = sample => ({
  type: RECEIVE_SAMPLE,
  sample
});

export const removeSample = sampleId => {
  return{

    type: REMOVE_SAMPLE,
    sampleId
  }
}

export const receiveSampleErrors = errors => ({
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

export const createSample = sample => dispatch => {
  return SampleApiUtl.createSample(sample)
    .then(
      sample => dispatch(receiveSample(sample)),
      err => dispatch(receiveSampleErrors(err.response.data))
    )
}

export const fetchSamplesFromRestaurant = (restaurantId) => dispatch => (
  SampleApiUtl.fetchSamplesFromRestaurant(restaurantId)
    .then(
      samples => dispatch(receiveRestaurantSamples(samples, restaurantId)),
      err => dispatch(receiveSampleErrors(err.response.data))
      )
)

export const deleteSample = (sampleId) => dispatch => {
  return SampleApiUtl.deleteSample(sampleId)
    .then(
      () => dispatch(removeSample(sampleId)),
      err => dispatch(receiveSampleErrors(err.response.data))
    );
}





