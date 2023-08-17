import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const categoryId = "categoryId";

export const getAllCategoriesAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_CATEGORIES_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.get("/api/v1/categories", config);
    dispatch({ type: "GET_ALL_CATEGORIES_SUCCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "GET_ALL_CATEGORIES_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message, { toastId: categoryId });
  }
};

export const getCategoryAction = (id) => async (dispatch) => {
  dispatch({ type: "GET_CATEGORY_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.get(`/api/v1/categories/${id}`, config);
    dispatch({ type: "GET_CATEGORY_SUCCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "GET_CATEGORY_FAILED",
      payload: err.response?.data.message,
    });
    toast.error(err.response?.data.message, { toastId: categoryId });
  }
};
