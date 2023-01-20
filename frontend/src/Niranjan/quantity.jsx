import { Button,Heading,Flex,Text ,Box} from '@chakra-ui/react';
import React from 'react'
import { increaseCartQuantity,decreaseCartQuantity} from '../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux'

const Quantity = ({id,quantity}) => {
    const cartProducts = useSelector((store)=>(store.cart.data))
     console.log(cartProducts);
   const dispatch = useDispatch()
   return (
     <Box> 
         <Flex justifyContent="center" alignItems="center" gap="5px"> 
    
         <Button disabled={quantity==1} onClick={ () => dispatch(decreaseCartQuantity(id)) }>-</Button>
 
             <Text fontSize='xl' >{ quantity }</Text>
 
         <Button onClick={ () => dispatch(increaseCartQuantity(id)) } >+</Button>           
     </Flex>
    
 
     </Box>
   
    
     
     
   )
 }
 
 export default Quantity