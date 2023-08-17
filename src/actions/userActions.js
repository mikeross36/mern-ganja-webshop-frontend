import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const updateAccId = "updateAccId";

export const updateUserAccountAction =
  (name, email, formData) => async (dispatch, getState) => {
    dispatch({ type: "UPDATE_ACCOUNT_REQUEST" });
    try {
      const currentUser = getState().loginUser.currentUser;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${currentUser.token}`,
        },
      };
      const { data } = await api.patch(
        "/api/v1/users/update-user-account",
        { name, email, formData },
        config
      );
      dispatch({ type: "UPDATE_ACCOUNT_SUCCESS", payload: data.updatedUser });
      if (data.status === "success") {
        toast.success(
          "Data updated successfully! Please login again with new data!",
          { autoClose: 3000, toastId: updateAccId }
        );
      }
      console.log(data);
    } catch (err) {
      dispatch({
        type: "UPDATE_ACCOUNT_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: updateAccId });
    }
  };
