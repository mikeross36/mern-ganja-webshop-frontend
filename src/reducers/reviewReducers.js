export const addReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_REVIEW_REQUEST":
      return { loading: true };
    case "ADD_REVIEW_SUCCESS":
      return { loading: false, success: true, content: action.content };
    case "ADD_REVIEW_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
