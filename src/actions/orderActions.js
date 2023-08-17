import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const orderId = "orderId";

export const createOrderActon =
  (token, cartTotal) => async (dispatch, getState) => {
    dispatch({ type: "CREATE_ORDER_REQUEST" });
    const currentUser = getState().loginUser.currentUser;
    const cartItems = getState().shoppingCart.cartItems;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/orders/create-order",
        { token, cartTotal, currentUser, cartItems },
        config
      );
      dispatch({ type: "CREATE_ORDER_SUCCESS" });
      if (data.status === "success") {
        toast.success("Order created successfully!", { toastId: orderId });
      }
    } catch (err) {
      dispatch({
        type: "CREATE_ORDER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: orderId });
    }
  };

export const getUserOrdersAction = () => async (dispatch, getState) => {
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  const currentUser = getState().loginUser.currentUser;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
    };
    const { data } = await api.post(
      "/api/v1/orders/get-user-orders",
      { userId: currentUser.user._id },
      config
    );
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "GET_USER_ORDERS_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message);
  }
};
