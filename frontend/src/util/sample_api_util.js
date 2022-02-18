import axios from 'axios';

export const fetchSamples = () => {
    return axios.get('/api/samples/')
};

export const fetchSample = (sampleId) => {
    return axios.get(`/api/samples/${sampleId}`)
}

export const fetchSamplesFromRestaurant = (restaurantId) => {
    console.log('sample api util', restaurantId)
    return axios.get(`/api/samples/restaurant/samples/${restaurantId}`)
}

export const createSample = sample => {
    return axios.post(`/api/samples/`, sample)
}

export const updateSample = sample => {
    return axios.patch(`/api/samples/${sample.id}`, sample)
}

export const deleteSample = sampleId => {
    return axios.delete(`/api/samples/${sampleId}`)
}