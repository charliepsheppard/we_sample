import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const signupRestaurant = restaurantData => {
  return axios.post('/api/restaurants/register', restaurantData);
}

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const loginRestaurant = (restaurantData) => {
  return axios.post('/api/restaurants/login', restaurantData);
};