import axios from "axios";


export const fetchOrdersFromRestaurant = (restaurantId) => {
  return axios.get(`/api/orders/restaurant/${restaurantId}`)
}

export const fetchOrdersFromUser = async (userId) => {
  return await axios.get(`/api/orders/user/${userId}`)
}

export const fetchOrder = (orderId) => {
  return axios.get(`/api/orders/${orderId}`)
}

export const createOrder = async (order) => {
  return await axios.post(`/api/orders/`, order)
}

export const updateOrder = (order) => {
  return axios.patch(`/api/orders/${order.id}`, order)
}

export const deleteOrder = (orderId) => {
  return axios.delete(`/api/orders/${orderId}`)
}