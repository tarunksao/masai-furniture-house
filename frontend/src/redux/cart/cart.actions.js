import axios from "axios";

import {
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  Increment,
  Decrement,
  ADD_ITEM_TO_CART_SUCCESS,
} from "./cart.types";

export const fetchProducts = async (disptach) => {
  disptach({ type: GET_CART_ITEMS_LOADING });
  return axios
    .get("http://localhost:7000/cart")
    .then((res) => {
      console.log(res.data);
      return disptach({ type: GET_CART_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(() => disptach({ type: GET_CART_ITEMS_ERROR }));
};

export const removeItem = (cartId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  return axios
    .delete(`http://localhost:7000/cart/${cartId}`)
    .then((r) => {
      console.log(r);
      dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: r });
    })
    .catch(() => dispatch({ type: REMOVE_CART_ITEMS_ERROR }));
};

export const increaseCartQuantity = (_id) => ({
  type: Increment,
  payload: _id,
});

export const decreaseCartQuantity = (_id) => ({
  type: Decrement,
  payload: _id,
});

export const addToCart = (item) => async (dispatch) => {
  console.log(item);
  let token = localStorage.getItem('token');
  console.log(token);
  try{
    let response = await axios.post('http://localhost:7000/cart/add', item, {
      headers: {
        'Authorization': `${token}`,
        // 'Accept' : 'application/json',
      }
    });
    let data = await response.data;
    console.log(response);
    dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data});
  } catch (e) {
    console.log(e);
  }
};
