import axios from "axios";
import * as types from "./admin.types";
import { saveData } from "../../Utils/localStorageData";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  axios
    .post("https://cyan-breakable-antelope.cyclic.app/admin/login", data)
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
    .post("https://cyan-breakable-antelope.cyclic.app/admin/register", data)
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
      .get(`https://cyan-breakable-antelope.cyclic.app/admin/product/?limit=${limit}&page=${page}`)
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
    .get("https://cyan-breakable-antelope.cyclic.app/admin/allproducts")
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
    .get(`https://cyan-breakable-antelope.cyclic.app/admin/singleproduct/${id}`)
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
    .patch(`https://cyan-breakable-antelope.cyclic.app/admin/updateproduct/${id}`, payload)
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
    .post(`https://cyan-breakable-antelope.cyclic.app/admin/addproduct`, payload)
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
    .delete(`https://cyan-breakable-antelope.cyclic.app/admin/deleteproduct/${id}`)
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
        `https://cyan-breakable-antelope.cyclic.app/admin/product/?limit=${limit}&page=${page}&price=${price}`
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
        `https://cyan-breakable-antelope.cyclic.app/admin/product/?limit=${limit}&page=${page}&quantity=${quantity}`
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

export const GetAllCustomer = () => (dispatch) => {
  dispatch({ type: types.GET_ALLCUSTOMER_REQUEST });
  return axios
    .get("https://cyan-breakable-antelope.cyclic.app/admin/allcustomer")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_ALLCUSTOMER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_ALLCUSTOMER_ERROR });
    });
};

export const GetSingleCustomer = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .get(`https://cyan-breakable-antelope.cyclic.app/admin/singlecustomer/${id}`)
    .then((response) => {
      console.log(response.data);
      saveData("singleUser", response.data[0]);
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

export const DeleteSingleCustomer = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .delete(`https://cyan-breakable-antelope.cyclic.app/admin/deletecustomer/${id}`)
    .then((response) => {
      console.log(response.data);
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

export const GetAllAdmins = () => (dispatch) => {
  dispatch({ type: types.GET_ALLADMINS_REQUEST });
  return axios
    .get("https://cyan-breakable-antelope.cyclic.app/admin/alladmins")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_ALLADMINS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_ALLADMINS_ERROR });
    });
};

export const GetSingleAdmin = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .get(`https://cyan-breakable-antelope.cyclic.app/admin/singleadmin/${id}`)
    .then((response) => {
      console.log(response.data);
      saveData("singleUser", response.data[0]);
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

export const DeleteSingleAdmin = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .delete(`https://cyan-breakable-antelope.cyclic.app/admin/deleteadmin/${id}`)
    .then((response) => {
      console.log(response.data);
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
