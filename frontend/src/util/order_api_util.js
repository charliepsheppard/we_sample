import axios from "axios";


export const fetchOrdersFromRestaurant = (restaurantId) => {
  return axios.get(`/api/orders/restaurant/${restaurantId}`)
}

export const fetchOrdersFromUser = (userId) => {
  return axios.get(`/api/orders/user/${userId}`)
}

export const fetchOrder = (orderId) => {
  return axios.get(`/api/orders/${orderId}`)
}

export const createOrder= (order) => {
  return axios.post(`/api/Orders/${order.restaurantId}`, order)
}

export const updateOrder = (order) => {
  return axios.patch(`/api/Orders/${order.id}`, order)
}

export const deleteOrder = (orderId) => {
  return axios.delete(`/api/Orders/${orderId}`)
}