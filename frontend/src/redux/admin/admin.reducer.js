import * as types from "./admin.types";

const initState = {
  adminData: {},
  isAuth: false,
  isLoading: false,
  isError: false,
  successfullyCreated: false,
  createAccountLoading: false,
  createAccountError: false,
};

export const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        adminData: action.payload,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

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
    default:
      return state;
  }
};
