import axios from "axios";
import * as types from "./admin.types";
import { saveData } from "../../Utils/localStorageData";

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
        console.log(e);
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };

export const GetAllProduct = () => (dispatch) => {
  dispatch({ type: types.GET_ALLPRODUCT_REQUEST });
  return axios
    .get("http://localhost:7000/admin/allproducts")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_ALLPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_ALLPRODUCT_ERROR });
    });
};

export const GetSingleProduct = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .get(`http://localhost:7000/admin/findbyid/${id}`)
    .then((response) => {
      console.log(response.data);
      saveData("singleProduct", response.data[0]);
      dispatch({
        type: types.GET_SINGLEPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_SINGLEPRODUCT_ERROR });
    });
};

export const UpdateSingleProduct = (id, payload) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:7000/admin/updateproduct/${id}`, payload)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.UPDATE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.UPDATE_PRODUCT_ERROR });
    });
};

export const AddNewProduct = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return axios
    .post(`http://localhost:7000/admin/addproduct`, payload)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.ADD_PRODUCT_ERROR });
    });
};

export const DeleteProduct = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  return axios
    .delete(`http://localhost:7000/admin/deleteproduct/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.DELETE_PRODUCT_SUCCESS,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.DELETE_PRODUCT_ERROR });
    });
};

export const SortByPrice =
  ({ limit, page, price }) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    return axios
      .get(
        `http://localhost:7000/admin/product/?limit=${limit}&page=${page}&price=${price}`
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: types.GET_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };

export const SortByQuantity =
  ({ limit, page, quantity }) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    return axios
      .get(
        `http://localhost:7000/admin/product/?limit=${limit}&page=${page}&quantity=${quantity}`
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: types.GET_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };
