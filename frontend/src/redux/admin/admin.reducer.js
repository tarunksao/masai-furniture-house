import * as types from "./admin.types";
import { getLocalData, saveData } from "../../Utils/localStorageData";

const initState = {
  adminData: getLocalData("loggedUser") || {},
  product: [],
  allProducts: [],
  allCustomers: [],
  allAdmins: [],
  isAuth: getLocalData("isAuth") || false,
  isLoading: false,
  isError: false,
  successfullyCreated: false,
  createAccountLoading: false,
  createAccountError: false,
};

export const adminReducer = (state = initState, action) => {
  switch (action.type) {
    /* For Admin Login*/
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      const loggedIn = !state.isAuth;
      saveData("isAuth", loggedIn);
      return {
        ...state,
        isLoading: false,
        isAuth: loggedIn,
        adminData: action.payload,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    /* For Admin Register*/
    case types.CREATE_REQUEST:
      return {
        ...state,
        createAccountLoading: true,
      };

    case types.CREATE_SUCCESS:
      return {
        ...state,
        createAccountLoading: false,
        successfullyCreated: true,
        createAccountError: false,
        isAuth: false,
      };

    case types.CREATE_FAILURE:
      return {
        ...state,
        createAccountLoading: false,
        successfullyCreated: false,
        createAccountError: true,
      };

    /* For Admin SignOut*/
    case types.SIGNOUT:
      return {
        ...state,
        adminData: {},
        isAuth: false,
        isLoading: false,
        isError: false,
        successfullyCreated: false,
        createAccountLoading: false,
        createAccountError: false,
      };

    /* To get products according to limit*/
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        product: [],
        isLoading: false,
        isError: true,
      };

    /* To get all Data*/
    case types.GET_ALLPRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_ALLPRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_ALLPRODUCT_ERROR:
      return {
        ...state,
        allProducts: [],
        isLoading: false,
        isError: true,
      };

    /* to update a product */
    case types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: [...state.product, action.payload],
        isLoading: false,
        isError: false,
      };

    case types.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        product: [],
        isLoading: false,
        isError: true,
      };

    /* To get all customer*/
    case types.GET_ALLCUSTOMER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_ALLCUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCustomers: action.payload,
        isError: false,
      };

    case types.GET_ALLCUSTOMER_ERROR:
      return {
        ...state,
        isLoading: false,
        allCustomer: [],
        isError: true,
      };

    /* To get all admins*/
    case types.GET_ALLADMINS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_ALLADMINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allAdmins: action.payload,
        isError: false,
      };

    case types.GET_ALLADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        allAdmins: [],
        isError: true,
      };

    default:
      return state;
  }
};
