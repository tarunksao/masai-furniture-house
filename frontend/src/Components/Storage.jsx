import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Box, Button, Text, Flex, Select, } from "@chakra-ui/react";
import styles from "./product.module.css";
import { useToast } from '@chakra-ui/react';
import Filter from './Filter';
import "./Top.css";
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';

const Storage = () => {
    const [data, setData] = React.useState([])
    const toast = useToast()
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setfilter] = useState(searchParams.get("sub_category"));
    const [sort, setSort] = useState(searchParams.getAll("sort"));




    const getFurniture = () => {
        axios.get("https://cyan-breakable-antelope.cyclic.app/products/storage & organization").then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    console.log(data)

    useEffect(() => {

        getFurniture()

    }, [])



    return (
        <>
        <Navbar />
            <div className='top'>
                <p>Products</p>
                <p>  Storage & organisation</p>
                <p> TV & media furniture</p>
            </div>

            {/* ................................. */}
            <div className='heading' style={{ color: "black" }}>
                <h1>TV & media furniture</h1>
            </div>

            {/* .......................................... */}
            <div className='vn-8-grid'>
                <div>
                    <img className='img' src="https://www.ikea.com/global/assets/navigation/images/tv-media-storage-14885.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>TV & media storage</p></div>
                </div>
                <div>
                    <img className='img' src="https://www.ikea.com/in/en/navigation/images/tv-benches-10810.jpeg?imwidth=500" />
                    <div className='vn__nav__title'><p>TV benches</p></div>
                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Set up your TV and other media devices in yo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ur house. Tuck away all those annoying wires and cables and let your storage perfectly blend into your decor with IKEA's stylish TV stand table and media furniture. Your TV and media devices will fit into these TV benches. You can place this TV stand in your living room or bedroom. It will look wonderful either way. These TV units have smooth running drawers and glass doors to showcase your TV. You can pick a TV stand with adjustable shelves and extra room for all your things.
                </p>
            </div>
            <Flex marginTop="30px" >
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
                    <img src="https://www.ikea.com/ext/ingkadam/m/617073edfa962bd1/original/PH183023-crop001.jpg?f=xl" alt="" /></div>
                <div>
                    <img src="https://www.ikea.com/ext/ingkadam/m/5827ba1de013d0fe/original/PH179197.jpg?f=xl" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "140px" }}>
                <h2 className='heading-ls'>
                    What should you look for in TV stand furniture?
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>You have decided to buy a table for your TV. Great. Here's what you should do before buying one. Choose a place for your TV stand. Where do you want it? Your living room? Your bedroom? Do you have room for a media room in your home? Will sunlight be coming into the room and you need to put a glare on the TV? These things are extremely important to know before you buy a TV stand.

                    The size of the TV stand has to be considered.
                </p>
            </div>
            {/* .................. */}
            <div style={{ marginTop: "70px" }}>
                <h2 className='heading-ls'>
                    Why should you get a TV stand?
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    A TV stand avoids uncomfortable sitting positions and revolutionises your overall TV viewing experience so it's goodbye to back aches and stiff necks. A TV stand at the right height will be easier on your eyes. So a TV at the correct level for your eyes is best for your health. You will be able to have the correct posture if you are binging your favourite TV shows or doing a movie marathon. Health conscious viewers will be very happy with the IKEA selection.

                    A TV stand will keep your TV out of easy reach of small children and pets.
                </p>
            </div>

            <div style={{ marginTop: "30px" }}>
                <h2 className='heading-ls'>
                    What should you put on your TV wall cabinet?
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Your TV stand has arrived and you have finished setting it up. Now, what to put on it? First, your TV should be nicely situated on the stand. Finish all your adjusting while somebody else stands far away while giving directions. With IKEA's stand, your TV cables will be out of sight and the cables go down nicely into the TV bench because of the cable outlet.

                    These TV stands have open shelves, cupboards, or drawers.

                </p>
            </div>
            {/* ..................... */}
            <div style={{ marginTop: "30px" }}>
                <h2 className='heading-ls'>
                    Get TV stands from IKEA today
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    All of IKEA's furniture is made with careful thought and design. A lot of thinking and designing goes into making the wide selection of furniture pieces by IKEA. Any raw material used by IKEA is cautiously selected so that you and your loved ones are safe. IKEA always uses resources very respectfully and wisely. No wasteful usage here. All furniture is carefully made and long lasting.

                    Practicality and elegance are what you get when you buy from IKEA. In the case of TV stands, the drawers have push-opener or soft-closing hinges. The push-opener will let you open the drawers with just a light push, while due to the soft-closing hinges, the drawers close silently and softly. You won't be struggling to open complicated drawers and the drawers won't shut with a loud noise. The carefully placed cable outlet will keep all those cables away from view and from being tangled up.

                </p>
            </div>
        </>
    )
}

export default Storage
