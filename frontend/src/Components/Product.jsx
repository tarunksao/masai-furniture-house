
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Text, } from "@chakra-ui/react";
import styles from "./product.module.css";
import { getProduct } from "../redux/products/products.actions"
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const ProductPage = () => {
    const product = useSelector((store) => store.product.product)
    console.log(product)
    const dispatch = useDispatch()
    const location = useLocation()
    const [searchParams] = useSearchParams()
  



    useEffect(() => {
        if (location || product.length === 0) {
            const sortBy = searchParams.get("sort")
            // console.log(sortBy)
            const getProductParams = {
                params: {
                    color: searchParams.getAll("color"),
                    _sort: sortBy && "Price",
                    _order: sortBy
                }
            }
            dispatch(getProduct(getProductParams))
        }

    }, [product.length, dispatch, location.search])

    return (
        <>

            <div className={styles.products}>
                <div className={styles.product}>


                    {product.length > 0 && product.map((el) =>
                    (

                        <Box borderRadius="10px" padding="20px" borderColor='red.200' key={el.id} gap="20px">
                            <img src={el.Image} alt="" />
                            <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{el.Brand_name}</Text>
                            <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{el.color}</Text>
                            <div className={styles.add}>
                                <div >
                                    <Text color="grey" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="18px" textAlign="left">$ {el.Price}</Text>
                                </div>
                                <div>
                                    <Link><Button border="none">Add to cart</Button></Link>
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