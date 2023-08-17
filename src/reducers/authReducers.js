export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return { loading: true };
    case "REGISTER_USER_SUCCESS":
      return { loading: false, success: true };
    case "REGISTER_USER_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return { loading: true };
    case "LOGIN_USER_SUCCESS":
      return { loading: false, success: true, currentUser: action.payload };
    case "LOGIN_USER_FAILED":
      return { login: false, error: action.payload };
    default:
      return state;
  }
};

export const logoutUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT_USER_REQUEST":
      return { loading: true };
    case "LOGOUT_USER_SUCCESS":
      return { loading: false, success: true };
    case "LOGOUT_USER_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case "RESET_PASSWORD_REQUEST":
      return { loading: true };
    case "RESET_PASSWORD_SUCCESS":
      return { loading: false, success: true };
    case "RESET_PASSWORD_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PASSWORD_REQUEST":
      return { loading: true };
    case "UPDATE_PASSWORD_SUCCESS":
      return { loading: false, success: true };
    case "UPDATE_PASSWORD_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
