import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  REMOVE_ORDER,
  CLEAR_ORDERS
} from "../actions/order_actions"

const ordersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ORDERS:
      let updatedState = {};
      action.orders.data.forEach((order) => {
        updatedState[order._id] = order;
      });
      return updatedState

    case RECEIVE_ORDER:
      // newState[action.order._id] = action.order.data
      // return newState
      return action.order.data;

    case REMOVE_ORDER:
      
      delete newState[action.orderId]
      return newState

    case CLEAR_ORDERS:
      return {};

    default:
      return oldState
  }
}

export default ordersReducer