import React from "react";
import { Box, Stack, Heading, Text, Flex, Progress } from "@chakra-ui/react";

const ActiveOrders = () => {
  return (
    <Box
      bg="#F1416C"
      boxShadow="md"
      borderRadius={8}
      padding="5"
      color="white"
      mb={6}
    >
      <Stack>
        <Heading fontSize="36">69</Heading>
        <Text fontSize="16" fontWeight="500" color="gray.100" marginTop="0">
          Orders Delivered
        </Text>
      </Stack>
      <Stack pt="10">
        <Flex justifyContent="space-between">
          43 Pending<Text>72%</Text>
        </Flex>
        <Progress colorScheme="teal.200" size="sm" value={70} />
      </Stack>
    </Box>
  );
};

export default ActiveOrders;
