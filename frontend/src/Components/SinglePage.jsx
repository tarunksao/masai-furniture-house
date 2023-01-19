import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../redux/products/products.actions'
import "./Singlepage.css"
import { Box, Button, Flex, Input, Stack } from '@chakra-ui/react';
import { ProductDetails } from './ProductDetalis';

const SinglePage = () => {
    const { id } = useParams()
    const product = useSelector((store) => store.product)
    console.log(product)
    const [current, setCurrent] = React.useState({});
    const dispatch = useDispatch()




    React.useEffect(() => {
        if (product.length === 0) {
            dispatch(getProduct())
        }
    }, [product.length, dispatch])


    React.useEffect(() => {
        if (id) {
            const curr = product.find((watch) => watch._id === id);
            console.log(curr)

            current && setCurrent(curr)
        }
    }, [id, product])


    return (
        <>
            <ProductDetails
                image={current.image_src}
                brand={current.brand_name}
                category={current.sub_category}
                price={current.price}
                des={current.prod_desc} />

        </>


    )
}

export default SinglePage


