import * as OrderApiUtil from "../util/order_api_util";

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const CLEAR_ORDERS = "CLEAR_ORDERS";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const receiveOrders = orders => {
  return {
    type: RECEIVE_ORDERS,
    orders
  }
}
export const receiveOrder = order => {
  return {
    type: RECEIVE_ORDER,
    order
  }
}
export const removeOrder = orderId => {
  return {
    type: REMOVE_ORDER,
    orderId
  }
}
export const clearOrders = () => {
  return {
    type: CLEAR_ORDERS
  }
}
export const receiveOrderErrors = errors => {
  return {
    type: RECEIVE_ORDER_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}
    //all orders for a res
export const fetchOrdersFromRestaurant = restaurantId => dispatch => {
  return OrderApiUtil.fetchOrdersFromRestaurant(restaurantId)
    .then(
      orders => dispatch(receiveOrders(orders)),
      err => dispatch(receiveOrderErrors(err.response.data))
    )
}
    //all orders for a use
export const fetchOrdersFromUser = userId => dispatch => {
  return OrderApiUtil.fetchOrdersFromUser(userId)
    .then(
      orders => dispatch(receiveOrders(orders)),
      err => dispatch(receiveOrderErrors(err.response.data))
    )
}

    //fetch one order
export const fetchOrder = orderId => dispatch => {
  return OrderApiUtil.fetchOrder(orderId)
    .then(
      order => dispatch(receiveOrder(order)),
      err => dispatch(receiveOrderErrors(err.response.data))
    )
}

    //creating an order, for users interface

export const createOrder = order => dispatch => {
  return OrderApiUtil.createOrder(order)
    .then(
      order => dispatch(receiveOrder(order)),
      err => dispatch(receiveOrderErrors(err.response.data))
    )
}
    //modifying an order, for users interface
export const updateOrder = order => dispatch => {
  return OrderApiUtil.createOrder(order)
    .then(
      order => dispatch(updateOrder(order)),
      err => dispatch(receiveOrderErrors(err.response.data))
    )
}
    //removing an order, for users interface
export const deleteOrder = OrderId => dispatch => {
  return OrderApiUtil.deleteOrder(OrderId)
    .then(
      () => dispatch(removeOrder(OrderId)),
      err => dispatch(receiveOrderErrors(err.response.data))
    )
}
