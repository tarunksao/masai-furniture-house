import React from "react";
import { Box, Stack, Heading, Text, Flex, Avatar } from "@chakra-ui/react";
import user from "../images/user.jpg";

const Professionals = () => {
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
        <Heading fontSize="36">357</Heading>
        <Text fontSize="16" color="gray.500">
          Professional Users
        </Text>
      </Stack>

      <Stack pt="10">
        <Heading fontSize="16" fontWeight="500">
          Today’s Heroes
        </Heading>
        <Flex>
          <Avatar
            size="sm"
            name=""
            border="2px"
            borderColor="gray.200"
            src={user}
          />
          <Avatar
            size="sm"
            marginLeft="-2.5"
            border="2px"
            borderColor="gray.200"
            name=""
            src={user}
          />
          <Avatar
            size="sm"
            marginLeft="-2.5"
            border="2px"
            borderColor="gray.200"
            name=""
            src={user}
          />
          <Avatar
            size="sm"
            marginLeft="-2.5"
            border="2px"
            borderColor="gray.200"
            name=""
            src={user}
          />
          <Avatar
            size="sm"
            marginLeft="-2.5"
            border="2px"
            borderColor="gray.200"
            name=""
            src={user}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default Professionals;
