import axios from 'axios';

export const getSamples = () => {
    return axios.get('/api/samples/')
};

export const getSample = (id) => {
    return axios.get(`/api/samples/${id}`)
}