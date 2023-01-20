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
   return axios.get("http://localhost:7000/products",params)
   .then((r)=>{
      dispatch(getproductSuccess(r.data.allProduct))
    //   console.log(r.data.allProduct)
   })
   .catch((e)=>{
      dispatch(getproductError())
   })
}
 
 export const getCategory=(params)=>(dispatch)=>{
   dispatch(getproductRequest())
   return axios.get(`http://localhost:7000/products/${params}`)
   .then((r)=>{
      dispatch(getproductSuccess(r.data.allProduct))
    //   console.log(r.data.allProduct)
   })
   .catch((e)=>{
      dispatch(getproductError())
   })
}
 
 