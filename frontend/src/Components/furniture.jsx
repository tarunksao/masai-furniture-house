import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Box, Button, Text, Flex, Select, } from "@chakra-ui/react";
import styles from "./product.module.css";
import { useToast } from '@chakra-ui/react';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';

const Furniture = () => {
    const [data, setData] = React.useState([])
    const toast = useToast()
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setfilter] = useState(searchParams.get("sub_category"));
    const [sort, setSort] = useState(searchParams.getAll("sort"));
    // const [category, setcategory] = useState(searchParams.getAll("category"));




    const getFurniture = (params) => {
        axios.get("https://cyan-breakable-antelope.cyclic.app/products/furniture", params).then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {

        getFurniture()

    }, [])



    return (
        <>
        <Navbar />
            <div className='top'>
                <p>Products</p>
                <p> Furniture </p>
                <p> Furniture sets</p>
            </div>

            {/* ................................. */}
            <div className='heading' style={{ color: "black" }}>
                <h1>Furniture sets</h1>
            </div>

            {/* .......................................... */}
            <div className='vn-8-grid'>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/bedroom-furniture-sets-54992.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Bedroom furniture sets</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/outdoor-sofa-sets-21960.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Outdoor sofa combinations</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/outdoor-dining-sets-21967.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Outdoor dining sets</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/in/en/navigation/images/dining-sets-19145.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Dining sets</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/desk-chair-sets-53249.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Desk & chair sets</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/bathroom-furniture-sets-46079.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>Bathroom furniture sets</p></div>
                </div>
            </div>
            <Flex mt="30px">
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
                            <Link to={`/furniture/Single/${ele._id}`}><img src={ele.image_src} alt="" width='100%'  /></Link>
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

            <div style={{ marginTop: "140px" }}>
                <h2 className='heading-ls'>
                    Working from home made easy with a desk and chair set
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>Looking to set up a space to work from home? You’re in the right place. To make it a bit easier for you, we’ve paired up desks, chairs and storage in handy all-you-need-for-working-from-home sets. Whether you’re looking for furniture to fit a small space, ergonomic desks and chairs, or a particular style, you’ll find the right desk and chair set for you here.
                </p>
            </div>

            <div className='image2-ls' style={{ marginTop: "70px" }}>
                <div className='flex'>
                    <img style={{ width: "100%" }} src='https://www.ikea.com/images/a-light-room-with-a-wall-mounted-tv-completely-framed-by-a-c-319c37fdec246b98345fd19445bcd36d.jpg?f=l' /></div>
                <div className='flex1' style={{ backgroundColor: "#B2A7A5" }}>
                    <div className='flex3'>
                        <h3 className='h3' style={{ color: "black" }}>Create your favourite TV unit combination</h3>
                        <p className='p' style={{ color: "black" }}>Do you prefer a mix of colours or a sleek and clean monochrome look? The BESTÅ system offers so many options that you can combine to easily get the personal storage solution that’s right for your space.</p>
                        <Button className='btn' style={{ backgroundColor: "black", color: "white" }}>See the best Storage system</Button>
                    </div>
                </div>
            </div>
            <div className='image3-ls'>
                <div>
                    <img src="https://www.ikea.com/ext/ingkadam/m/339c0d0c02880104/original/PE834574-crop001.jpg?f=xl" alt="" /></div>
                <div>
                    <img src="https://www.ikea.com/ext/ingkadam/m/79cd414de8b69e8b/original/PE837353-crop001.jpg?f=xl" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "140px" }}>
                <h2 className='heading-ls'>
                    Take the guesswork out of matching pieces of furniture
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>If you put a lot of thought and effort into choosing matching furniture for your room, our furniture sets are exactly what you need. They are designed to be in proportion to each other and are thoughtfully matched by style and finish. To furnish your room, pick the theme, colour or style that you like best. Furnish your bedroom easily with a matched set of bed, bedside table and wardrobe. Consider the size of your room and your seating requirements before you choose a dining set.
                </p>
            </div>
            {/* .................. */}
            <div style={{ marginTop: "70px" }}>
                <h2 className='heading-ls'>
                    Easy to coordinate bedrooms
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    The most important consideration when choosing bedroom furniture is the space in your room. Measure your room accurately to ensure that the set will fit in with enough room for you to move around. When planning a bedroom layout, leave enough room for wardrobe doors and under bed storage to open. Since the bed and the wardrobe are the most significant pieces in the room, they must coordinate or match. A matched set of bedroom furniture will also be similar in proportion and look balanced in the room.
                </p>
            </div>

            <div style={{ marginTop: "30px" }}>
                <h2 className='heading-ls'>
                    Perfectly pulled together dining rooms
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    The dining table is where the whole family gathers at mealtimes. It can also serve as a study table or a food prep station. A sturdy table with an easy to clean top is essential for a family home. Our dining table sets offer a range of sizes and finishes that are easy to maintain. So, you can quickly transform your dining table from the children’s homework station to a formal table setting for dinner.

                </p>
            </div>
            {/* ..................... */}
            <div style={{ marginTop: "30px" }}>
                <h2 className='heading-ls'>
                    Outdoor dining in style
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Pleasant weather calls for outdoor living. Make the most of your outdoor spaces with comfortable and practical furniture sets. Patio furniture should be easy to care for and comfortable to use. Enjoy good weather and fresh air by dining outdoors. Outdoor dining and seating are also useful when you host a party. Our outdoor sets come in choices of wood and metal in different combinations.

                </p>
            </div>
        </>
    )
}

export default Furniture
