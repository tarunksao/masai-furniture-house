import React from 'react'
import {
    Box,
    Heading,
    Image,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
  } from "@chakra-ui/react";
const Form2 = () => {
  return (
    <>
    <Box
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-evenly",
        cursor: "pointer",
      }}
    >
      <Image
        src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/04/Regalia-HDFC.png.webp"
        style={{ width: "10%", height: "100%", marginLeft: "10px" }}
      ></Image>
      <Image
        src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/simplysave-credit-card.jpg.webp"
        style={{ width: "10%", height: "100%", marginLeft: "10px" }}
      ></Image>
      <Image
        src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/ICICI-Coral-Contactless-Card.jpg.webp"
        style={{ width: "10%", height: "100%", marginLeft: "10px" }}
      ></Image>
      <Image
        src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/11/222.png.webp"
        style={{ width: "10%", height: "100%", marginLeft: "10px" }}
      ></Image>
      <Image
        src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/Citi-Cash-Back-Credit-Card.jpg.webp"
        style={{ width: "10%", height: "100%", marginLeft: "10px" }}
      ></Image>
      <Image
        src="https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/10/YES-Prosperity-Rewards-Plus.jpg.webp"
        style={{ width: "10%", height: "100%", marginLeft: "10px" }}
      ></Image>
    </Box>
    <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
      WE ACCEPT
    </Heading>
    <FormControl as={GridItem} colSpan={[6, 3]}>
      <FormLabel
        htmlFor="country"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: "gray.50",
        }}
      >
        Country / Region
      </FormLabel>
      <Select
        id="country"
        name="country"
        autoComplete="country"
        placeholder="Select option"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      >
        <option>INDIA</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </Select>
    </FormControl>
    <FormControl as={GridItem} colSpan={[6, 3]}>
      <FormLabel
        htmlFor="country"
        fontSize="sm"
        marginTop="10px"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: "gray.50",
        }}
      >
        State/Province
      </FormLabel>
      <Select
        id="country"
        name="country"
        autoComplete="country"
        placeholder="Please Select"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      >
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chhattisgarh</option>
        <option>Goa</option>
        <option>Gujrat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jharkhand</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Mizoram</option>
        <option>Nagaland</option>
        <option>Odisha</option>
        <option>Punjab</option>
        <option>Rajasthan</option>
        <option>Sikkim</option>
        <option>Tamil Nadu</option>
        <option>Telangana</option>
        <option>Tripura</option>
        <option>Uttarakhand</option>
        <option>Utter Pradesh</option>
        <option>West Bengal</option>
      </Select>
    </FormControl>
    <FormControl as={GridItem} colSpan={[6, 3]}>
      <FormLabel
        htmlFor="country"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: "gray.50",
        }}
      >
        Card Provider
      </FormLabel>
      <Select
        id="country"
        name="country"
        autoComplete="country"
        placeholder="Select option"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      >
        <option>HDFC Regalia Credit Card</option>
        <option>SBI Credit Card</option>
        <option>ICICI Bank Coral Contactless Card</option>
        <option>ICICI Platinum Chip Card – Visa</option>
        <option>Citibank Cashback Credit Card</option>
        <option>YES Prosperity Rewards Plus Credit Card</option>
        <option>IndusInd Bank Legend Credit Card</option>
      </Select>
    </FormControl>
    <FormControl as={GridItem} colSpan={6}>
      <FormLabel
        htmlFor="street_address"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: "gray.50",
        }}
        mt="2%"
      >
        Cardholder Full Name
      </FormLabel>
      <Input
        type="text"
        name="street_address"
        id="street_address"
        autoComplete="street-address"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>

    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
      <FormLabel
        htmlFor="city"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        textAlign="center"
        _dark={{
          color: "gray.50",
        }}
        mt="2%"
      >
        Credit Card Number
      </FormLabel>
      <Input
        textAlign="center"
        placeholder="1234 5678 7867"
        type="number"
        name="city"
        id="city"
        autoComplete="city"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>
    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
      <FormLabel
        htmlFor="city"
        placeholder="Amount"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        textAlign="center"
        _dark={{
          color: "gray.50",
        }}
        mt="2%"
      >
        Amount
      </FormLabel>
      <Input
        textAlign="center"
        placeholder=" Amount in Rs"
        type="number"
        name="city"
        id="city"
        autoComplete="city"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>
    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
      <FormLabel
        htmlFor="city"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        textAlign="center"
        _dark={{
          color: "gray.50",
        }}
        mt="2%"
      >
        Expiration Month
      </FormLabel>
      <Input
        type="month"
        name="city"
        id="city"
        autoComplete="city"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>
    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
      <FormLabel
        htmlFor="city"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        textAlign="center"
        _dark={{
          color: "gray.50",
        }}
        mt="2%"
      >
        Security Code (CVV)
      </FormLabel>
      <Input
        textAlign="center"
        type="password"
        name="city"
        id="city"
        autoComplete="city"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>

    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
      <FormLabel
        htmlFor="state"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: "gray.50",
        }}
        mt="2%"
      >
        Billing Address
      </FormLabel>
      <Input
        type="text"
        name="state"
        id="state"
        autoComplete="state"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>
  </>
  )
}

export default Form2