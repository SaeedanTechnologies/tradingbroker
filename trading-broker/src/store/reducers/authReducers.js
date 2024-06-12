const initialState = {
  loginUser: null,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "SET_LOGIN_USER": {
      return {
        ...state,
        loginUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
