import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.types";

const initState = {
  userData: {},
  isAuth: false,
  isLoading: false,
  isError: false,
  successRegister: false,
  loadingRegister: false,
  errorRegister: false,
};

export const authReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData: payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        loadingRegister: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loadingRegister: false,
        successRegister: true,
        errorRegister: false,
        isAuth: false,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loadingRegister: false,
        successRegister: false,
        errorRegister: true,
      };

    case LOGOUT:
      return {
        ...state,
        userData:{},
        isAuth: false,
        isLoading: false,
        isError: false,
        successRegister: false,
        loadingRegister: false,
        errorRegister: false,
      };

    default:
      return state;
  }
};
