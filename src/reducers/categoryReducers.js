export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES_REQUEST":
      return { loading: true, ...state };
    case "GET_ALL_CATEGORIES_SUCCESS":
      return { loading: false, success: true, categories: action.payload };
    case "GET_ALL_CATEGORIES_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCategoryReducer = (
  state = { category: { ganjas: [] } },
  action
) => {
  switch (action.type) {
    case "GET_CATEGORY_REQUEST":
      return { loading: true, ...state };
    case "GET_CATEGORY_SUCCESS":
      return { loading: false, success: true, category: action.payload };
    case "GET_CATEGORY_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
