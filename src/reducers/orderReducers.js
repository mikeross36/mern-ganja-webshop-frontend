export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ORDER_REQUEST":
      return { loading: true };
    case "CREATE_ORDER_SUCCESS":
      return { loading: false, success: true };
    case "CREATE_ORDER_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { userOrders: [] }, action) => {
  switch (action.type) {
    case "GET_USER_ORDERS_REQUEST":
      return { loading: true, ...state };
    case "GET_USER_ORDERS_SUCCESS":
      return { loading: false, success: true, userOrders: action.payload };
    case "GET_USER_ORDERS_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
