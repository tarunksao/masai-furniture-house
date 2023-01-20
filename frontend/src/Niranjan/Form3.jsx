import React from "react";
import VerifyEmailForm from "../Niranjan/OTP";
import {
  Heading,
} from "@chakra-ui/react";
const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Payment Success!
      </Heading>
      <VerifyEmailForm />
    </>
  )
}

export default Form3