import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Box, Button, Text, Flex, Select, } from "@chakra-ui/react";
import styles from "./product.module.css";
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import "./Top.css";
import Navbar from './Navbar';
const Kitchen = () => {
    const [data, setData] = React.useState([])
    const toast = useToast()
    const [searchParams, setSearchParams] = useSearchParams();





    const getKitchen = () => {
        axios.get("https://cyan-breakable-antelope.cyclic.app/products/kitchen & appliances").then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    console.log(data)

    useEffect(() => {

        getKitchen()

    }, [])



    return (
        <>
        <Navbar />
            <div className='top'>
                <p>Products</p>
                <p>Kitchen & appliances</p>
                <p> Kitchen doors & drawer fronts</p>
            </div>

            {/* ................................. */}
            <div className='heading' style={{ color: "black" }}>
                <h1>Kitchen doors & drawer fronts</h1>
            </div>

            {/* .......................................... */}
            <div className='vn-8-grid'>
                <div>
                    <img className='img' src="https://www.ikea.com/in/en/navigation/images/kitchen-doors-23613.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Kitchen doors</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/enhet-doors-drawerfronts-48992.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>ENHET doors & drawerfronts</p></div>
                </div>
            </div>
            <Flex>
                <Box
                    w={{
                        base: "50%",
                        sm: "40%",
                        md: "30%",
                        xl: "20%",
                        "2xl": "20%",
                    }}
                    ml={"10%"}
                    mb={6}
                >
                    <Select placeholder="Sort With Price" >
                        <option value="asc">Low To High</option>
                        <option value="desc">High To Low</option>
                    </Select>
                </Box>
                <Box
                    w={{
                        base: "50%",
                        sm: "40%",
                        md: "30%",
                        xl: "20%",
                        "2xl": "20%",
                    }}
                    ml={"10%"}
                    mb={6}
                >
                    <Select placeholder="Filter with Sub Category" >
                        <option value="gaming furniture">gaming furniture</option>
                        <option value="sofa">sofa</option>
                        <option value="tv & media furniture">tv & media furniture</option>
                        <option value="bed">bed</option>
                        <option value="kitchen appliances">kitchen appliances</option>
                        <option value="pantry">pantry</option>
                    </Select>
                </Box>
            </Flex>
            <div className={styles.products}>

                <div className={styles.product}>
                    {data.length > 0 && data.map((ele) =>
                    (
                        <Box key={ele._id} borderRadius="10px" padding="20px" borderColor='red.200' gap="20px" border="1px solid cyan">
                            <Link to={`/furniture/Single/${ele._id}`}><img src={ele.image_src} alt="" /></Link>
                            <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{ele.brand_name}</Text>
                            <Text paddingBottom="15px" color="RGB(45, 45, 45)" fontFamily="futura-pt, sans-serif" fontSize="14px" textAlign="left">{ele.prod_desc}</Text>
                            <Text color="black" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="16px" textAlign="left">{ele.sub_category}</Text>
                            <div className={styles.add}>
                                <div>
                                    <Text color="black" fontWeight="700" fontFamily="futura-pt, sans-serif" fontSize="17px" textAlign="left">Rs{ele.price}</Text>
                                </div>
                                <div>
                                    <Button onClick={() =>
                                        toast({
                                            title: "Added to Cart.",
                                            description: "Data has been added to the  Cart Page",
                                            status: "info",
                                            duration: 1000,
                                            isClosable: true,
                                            position: "top",

                                        })
                                    } border="solid" variant="outlined" bg="blue" color="white" marginLeft="100px">Add to Cart</Button>
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

export default Kitchen
