export const updateUserAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ACCOUNT_REQUEST":
      return { loading: true };
    case "UPDATE_ACCOUNT_SUCCESS":
      return { loading: false, success: true, updatedUser: action.payload };
    case "UPDATE_ACCOUNT_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
