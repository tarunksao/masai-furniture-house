import * as types from "./products.types"
import axios from "axios";

const getproductRequest =()=>{
   return{
  type:types.GET_PRODUCT_REQUEST,
   }
}

const getproductSuccess =(payload)=>{
    return{
        type:types.GET_PRODUCT_SUCCESS,
        payload,
    }
 }

 const getproductError =()=>{
    return{
        type:types.GET_PRODUCT_ERROR,
    }
 }
 
 export const getProduct=(params)=>(dispatch)=>{
     dispatch(getproductRequest())
     return axios.get("https://mock-api-server.onrender.com/products",params)
     .then((r)=>{
        dispatch(getproductSuccess(r.data))
      //   console.log(r)
     })
     .catch((e)=>{
        dispatch(getproductError())
     })
 }
 
 