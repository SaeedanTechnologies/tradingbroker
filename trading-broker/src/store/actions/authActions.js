export const setToken = (token) => (dispatch) => {
  dispatch({
    type: "SET_TOKEN",
    payload: token,
  });
};

export const setLoginUser = (user) => (dispatch) => {
  dispatch({
    type: "SET_LOGIN_USER",
    payload: user,
  });
};
