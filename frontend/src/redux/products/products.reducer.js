
import * as types from "./products.types";

const initialState ={
    product:[],
    isError:false,
    isLoading:false,
}

export const productReducer =(state=initialState,action)=>{

    switch(action.type){

        case types.GET_PRODUCT_REQUEST:
        return{
            ...state,
            isLoading:true,
        }
        case types.GET_PRODUCT_SUCCESS:
        return{
            ...state,
           product:action.payload,
            isLoading:false,
            isError:false,

        }
        case types.GET_PRODUCT_ERROR:
        return{
            ...state,
            product:[],
            isLoading:false,
            isLoading:true,
        }
        
        default:
        return state;
    }


}
