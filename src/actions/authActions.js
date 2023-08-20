import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const authId = "authId";

export const registerUserAction =
  (name, email, password) => async (dispatch) => {
    dispatch({ type: "REGISTER_USER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/users/register-user",
        { name, email, password },
        config
      );
      dispatch({ type: "REGISTER_USER_SUCCESS" });
      if (data.status === "success") {
        toast.success("You registered successfully!", { toastId: authId });
      }
    } catch (err) {
      dispatch({
        type: "REGISTER_USER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: authId });
    }
  };

export const loginUserAction = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.post(
      "/api/v1/users/login-user",
      { email, password },
      config
    );
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: data });
    if (data.status === "success") {
      toast.success("You logged in successfully!", { toastId: authId });
    }
  } catch (err) {
    dispatch({
      type: "LOGIN_USER_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message, { toastId: authId });
  }
};

export const logoutUserAction = () => async (dispatch) => {
  dispatch({ type: "LOGOUT_USER_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.post("/api/v1/users/logout-user", config);
    dispatch({ type: "LOGOUT_USER_SUCCESS" });
    if (data.status === "success") {
      toast.success("You logged out successfully!", { toastId: authId });
    }
    window.location.replace("/");
  } catch (err) {
    dispatch({
      type: "LOGOUT_USER_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message, { toastId: authId });
  }
};

export const resetPasswordAction = (password, token) => async (dispatch) => {
  dispatch({ type: "RESET_PASSWORD_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.patch(
      `/api/v1/users/reset-password/${token.token}`,
      { password },
      config
    );
    dispatch({ type: "RESET_PASSWORD_SUCCESS" });
    if (data.status === "success") {
      toast.success("Password reset successful", { toastId: authId });
    }
  } catch (err) {
    dispatch({
      type: "RESET_PASSWORD_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message);
  }
};

export const updatePasswordAction =
  (loginPassword, password) => async (dispatch) => {
    dispatch({ type: "UPDATE_PASSWORD_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.patch(
        "/api/v1/users/update-password",
        { loginPassword, password },
        config
      );
      dispatch({ type: "UPDATE_PASSWORD_SUCCESS" });
      if (data.status === "success") {
        toast.success(
          "Password updated successfully! Please login again with new data",
          { autoClose: 3000, toastId: authId }
        );
      }
      console.log(data);
    } catch (err) {
      dispatch({
        type: "UPDATE_PASSWORD_FAILED",
        paylaod: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: authId });
    }
  };
