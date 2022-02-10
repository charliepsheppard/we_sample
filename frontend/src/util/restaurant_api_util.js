import axios from "axios";

export const fetchRestaurants = () => {
  return axios.get("/api/restaurants/")
}

export const fetchRestaurant = restaurantId => {
  return axios.get(`/api/restaurants/${restaurantId}`)
}

export const updateRestaurant = restaurant => {
  return axios.patch(`api/restaurants/${restaurant.id}`, restaurant)
}

export const restaurantSearch = query => {
  return axios.get('/api/restaurants/search', query)
}