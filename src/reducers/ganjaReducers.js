export const getAllGanjasReducer = (state = { ganjas: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_GANJAS_REQUEST":
      return { loading: true, ...state };
    case "GET_ALL_GANJAS_SUCCESS":
      return { loading: false, success: true, ganjas: action.payload };
    case "GET_ALL_GANJAS_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getGanjaReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_GANJA_REQUEST":
      return { loading: true, ...state };
    case "GET_GANJA_SUCCESS":
      return { loading: false, success: true, ganja: action.payload };
    case "GET_GANJA_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
