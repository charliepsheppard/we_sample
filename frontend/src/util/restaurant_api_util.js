import axios, { Axios } from "axios";

export const fetchRestaurants = () => {
  return axios.get("/api/restaurants/")
}

export const fetchRestaurant = restaurantId => {
  return axios.get(`/api/restaurants/${restaurantId}`)
}

export const fetchUsersRestaurants = restaurantOwnerId => {
  return axios.get(`/api/restaurants/${restaurantOwnerId}`)
}

export const createRestaurant =restaurant => {
  return axios.post(`/api/restaurants/${restaurant.restaurantOwnerId}`, restaurant)
}

export const updateRestaurant = restaurant => {
  return axios.patch(`api/restaurants/${restaurant.id}`, restaurant)
}

export const restaurantSearch = query => {
  return axios.get('/api/restaurants/search', query)
}