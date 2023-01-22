import React from "react";
import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Form1 from "../Niranjan/Form1";
import Form2 from "../Niranjan/Form2";
import Form3 from "../Niranjan/Form3";
import Navbar from "../Components/Navbar";
export default function Checkout() {
  const navigate = useNavigate();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
    <Navbar />
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Payment Successfull.",
                    description: "Thank You for Purchasing Our Product",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });

                  setTimeout(() => {
                    return navigate("/");
                  }, 0);
                }}
              >
                Home
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
