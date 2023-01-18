import axios from "axios";
import * as types from "./admin.types";

import axios from "axios";
import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "./actionTypes";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  dispatch({ type: types.LOGIN_SUCCESS, payload: data });

  dispatch({ type: types.LOGIN_FAILURE });
};

export const SignUpFunction = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_REQUEST });

  axios
    .post("https://636b1db9b10125b78feba23b.mockapi.io/profile", data)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.CREATE_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      v;
      dispatch({ type: types.CREATE_FAILURE });
    });
};
