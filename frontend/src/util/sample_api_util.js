import axios from 'axios';

export const fetchSamples = () => {
    return axios.get('/api/samples/')
};

export const fetchSample = (sampleId) => {
    return axios.get(`/api/samples/${sampleId}`)
}

export const fetchSamplesFromRestaurant = async (restaurantId) => {
    // console.log('sample api util', restaurantId)
    return await axios.get(`/api/samples/menu/${restaurantId}`)
}

export const createSample = sample => {
    return axios.post(`/api/samples/`, sample)
}

export const updateSample = sample => {
    return axios.patch(`/api/samples/${sample.id}`, sample)
}

export const deleteSample = (sampleId, sample) => {
    return axios.delete(`/api/samples/${sampleId}`, {params: {restaurantId: sample.restaurantId}})
}