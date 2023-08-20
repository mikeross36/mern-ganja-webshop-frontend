import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const ganjaId = "ganjaId";

export const getAllGanjasAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_GANJAS_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.get("/api/v1/ganjas", config);
    if (data) dispatch({ type: "GET_ALL_GANJAS_SUCCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "GET_ALL_GANJAS_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message, { toastId: ganjaId });
  }
};

export const getGanjaAction = (id) => async (dispatch) => {
  dispatch({ type: "GET_GANJA_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.get(`/api/v1/ganjas/${id}`, config);
    if (data) dispatch({ type: "GET_GANJA_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "GET_GANJA_FAILED", payload: err.response?.data.message });
    toast.error(err.response?.data.message, { toastId: ganjaId });
  }
};
