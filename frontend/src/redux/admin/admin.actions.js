import axios from "axios";
import * as types from "./admin.types";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  axios
    .post("http://localhost:7000/admin/login", data)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const SignUpFunction = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_REQUEST });

  axios
    .post("http://localhost:7000/admin/register", data)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.CREATE_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.CREATE_FAILURE });
    });
};

export const GetProducts =
  ({ limit, page }) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    return axios
      .get(`http://localhost:7000/admin/product/?limit=${limit}&page=${page}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: types.GET_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };
