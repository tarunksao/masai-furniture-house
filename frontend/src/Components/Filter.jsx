
import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Flex, Grid, Select, Spacer, Text, boxShadow, border, borderColor, borderRadius } from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialColor = searchParams.getAll("sub_category")
    console.log(initialColor)
    // instead of category putting category here
    const initialSort = searchParams.getAll("sort")
    const [category, setCategory] = React.useState(initialColor || [])
    const [sort, setSortBy] = React.useState(initialSort || "")
    const location = useLocation()


    const handleFilterCheckBox = (e) => {


        const newCategory = e.target.value;

        if (newCategory !== "") {
            setCategory(e.target.value)
        } else {
            setCategory([])
        }
        console.log(category)
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
        // console.log(sort)
    }

    React.useEffect(() => {
        let params = {};
        // console.log(params.sub_category)
        params.sub_category = category;
        sort && (params.sort = sort)
        setSearchParams(params)

    }, [category, setSearchParams, sort])


    return (
        <>
            <Box color="secondary" borderColor='gray.200' width="40%" marginLeft="85px" padding="10px" w={{
                base: "50%",
                sm: "40%",
                md: "30%",
                xl: "80%",
                "2xl": "20%",
            }}>
                <Flex wrap="wrap" gap="20px" variant="outlined">
                    <Select onChange={handleSort} border="2px" w="100px" variant='solid' placeholder="Sort" borderRadius="20px">
                        <option value="desc" name="sortBy">Price high to low</option>
                        <option value="asc" name="sortBy">Price low to high</option>
                    </Select>
                    <Select onChange={handleFilterCheckBox} variant="outlined" border="2px" w="100px" placeholder="Category" borderRadius="20px">
                        <option value="gaming furniture">gaming furniture</option>
                        <option value="sofa">sofa</option>
                        <option value="tv & media furniture">tv & media furniture</option>
                        <option value="bed">bed</option>
                    </Select>
                </Flex>
            </Box>
        </>
    )
}

export default Filter
