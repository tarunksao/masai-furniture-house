import {
    GET_CART_ITEMS_LOADING,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_ERROR,
    REMOVE_CART_ITEMS_LOADING,
    REMOVE_CART_ITEMS_SUCCESS,
    REMOVE_CART_ITEMS_ERROR,
    Increment,
    Decrement,
    ADD_ITEM_TO_CART_SUCCESS
  } from "./cart.types";
  
  const initalState = {
  
      loading: false,
      error: false,
      data: [],
        
  };
  export const cartReducer = (state = initalState, { type, payload }) => {
    switch (type) {
      case GET_CART_ITEMS_LOADING: {
        return { ...state,   loading: true, error: false,  };
      }
      case GET_CART_ITEMS_SUCCESS: {
        console.log(payload);
        return { ...state, loading: false,data: payload,};
      }
      case GET_CART_ITEMS_ERROR: {
        return { ...state,loading: false, error: true,  };
      
       
      }
      case Increment:{
       
          return{
            ...state,
            data: state.data.map((item) => item.id === payload ? { ...item, qty: item.qty + 1 } : item)
          }   
      }
  
      case Decrement:{
        return{
          ...state,
          data: state.data.map((item) => item.id === payload ? { ...item, qty: item.qty - 1 } : item)
        }
      }
  
      case REMOVE_CART_ITEMS_LOADING: {
        return { ...state, loading: true, error: false  };
      }
      case REMOVE_CART_ITEMS_SUCCESS: {
        const remove = state.data.filter((cI) => cI.id !== payload);
        return { ...state, data: remove,  loading: false } };
      
      case REMOVE_CART_ITEMS_ERROR: {
        return { ...state,  loading: false, error: true  };
      }
      case ADD_ITEM_TO_CART_SUCCESS: {
        return {
          ...state,
          data:[...state.data, payload]
        }
      }
      default: {
        return state;
      }
    }
  };
