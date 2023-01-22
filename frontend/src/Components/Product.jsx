import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";


import styles from "./product.module.css";
import { getProduct } from "../redux/products/products.actions"
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../redux/cart/cart.actions";


const ProductPage = () => {
    const toast = useToast()
    const product = useSelector((store) => store.product.product)
    console.log(product)
    const dispatch = useDispatch()
    const location = useLocation()
    // console.log(location)
    // i need searchParams here again
    const [searchParams] = useSearchParams()
    // console.log(searchParams)



    useEffect(() => {
        if (location || product.length === 0) {
            const sortBy = searchParams.get("sort")
            // console.log(sortBy)
            const getProductParams = {
                params: {
                    color: searchParams.getAll("sub_category"),
                    _sort: sortBy && "price",
                    _order: sortBy
                }
            }
            dispatch(getProduct(getProductParams))
        }

    }, [product.length, dispatch, location.search])

    const handleClick = (ele) => {
        let product = ele;
        // console.log('product:', ele);
        dispatch(addToCart(product));

        toast({
            title: "Added to Cart.",
            description: "Data has been added to the  Cart Page",
            status: "info",
            duration: 1000,
            isClosable: true,
            position: "top",
        });
    }

    return (
        <>

            <div className={styles.products}>

                <div className={styles.product}>
                    {product.length > 0 && product.map((ele) =>
                    (
                        <Box key={ele._id} borderRadius="10px" padding="20px" borderColor='red.200' gap="20px" border="1px solid cyan">
                            <Link to={`/product/${ele._id}`}><img src={ele.image_src} alt="" /></Link>
                            <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{ele.brand_name}</Text>
                            <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{ele.prod_desc}</Text>
                            <Text color="black" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="16px" textAlign="left">{ele.sub_category}</Text>
                            <div className={styles.add}>
                                <div>
                                    <Text color="black" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="17px" textAlign="left">Rs{ele.price}</Text>
                                </div>
                                <div>
                                    <Button onClick={() => handleClick(ele._id)} border="solid" variant="outlined" bg="blue" color="white" marginLeft="100px">Add to Cart</Button>
                                </div>
                            </div>
                        </Box>
                    )
                    )}
                </div>
            </div>
        </>

    )
}

export { ProductPage }
