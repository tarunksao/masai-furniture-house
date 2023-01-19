import axios from "axios";
import * as types from "./admin.types";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  dispatch({ type: types.LOGIN_SUCCESS, payload: data });

  dispatch({ type: types.LOGIN_FAILURE });
};

export const SignUpFunction = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_REQUEST });

  axios
    .post("", data)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.CREATE_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.CREATE_FAILURE });
    });
};
