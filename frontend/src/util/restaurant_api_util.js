import axios from "axios";

export const fetchRestaurants = () => {
  return axios.get("/api/restaurants/")
}

export const fetchRestaurant = restaurantId => {
  return axios.get(`/api/restaurants/${restaurantId}`)
}

export const fetchUsersRestaurants = restaurantOwnerId => {
  // debugger;
  return axios.get(`/api/restaurants/user/${restaurantOwnerId}`)
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

export const deleteRestaurant = restaurantId => {
  return axios.delete(`/api/restaurants/${restaurantId}`);
}