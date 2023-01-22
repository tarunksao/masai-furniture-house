import React from "react";
import { Box, Stack, Heading, Text, Image } from "@chakra-ui/react";
import image from "../images/chartsmall.jpg";

const Earning = () => {
  return (
    <Box
      mb={6}
      bg="white"
      boxShadow="md"
      borderRadius={8}
      padding="5"
      color="black"
    >
      <Stack>
        <Heading fontSize="36">69,700</Heading>
        <Text fontSize="16" color="gray.500">
          Earnings in this year
        </Text>
      </Stack>

      <Image mt="5" src={image} />
    </Box>
  );
};

export default Earning;
