import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  Button,
  Link,
  PopoverTrigger,
  Popover,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon, DragHandleIcon } from "@chakra-ui/icons";

const ExternalLinks = () => {
  return (
    <Box
      mb={6}
      bg="black"
      boxShadow="md"
      borderRadius={8}
      padding="5"
      color="gray.500"
    >
      <Stack>
        <Flex justifyContent="space-between">
          <Heading fontSize="20" pt="4">
            External Links
          </Heading>
          <Popover placement="bottom" boxShadow="xl" bg="#ADD8E6">
            <PopoverTrigger>
              <Button>
                <DragHandleIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent boxShadow="xl">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold" p={3}>
                Quick Actions
              </PopoverHeader>
              <PopoverBody bg="#ADD8E6">
                <UnorderedList listStyleType="none" m="0">
                  <ListItem m="0">
                    <Link
                      display="block"
                      py={2}
                      px={3}
                      borderRadius={4}
                      color={"black"}
                      _hover={{
                        color: "green.500",
                        textDecoration: "none",
                        backgroundColor: "green.100",
                      }}
                    >
                      New Product
                    </Link>
                  </ListItem>
                  <ListItem m="0">
                    <Link
                      display="block"
                      py={2}
                      px={3}
                      borderRadius={4}
                      color={"black"}
                      _hover={{
                        color: "green.500",
                        textDecoration: "none",
                        backgroundColor: "green.100",
                      }}
                    >
                      New Customer
                    </Link>
                  </ListItem>
                  <ListItem m="0">
                    <Link
                      display="block"
                      py={2}
                      px={3}
                      borderRadius={4}
                      color={"black"}
                      _hover={{
                        color: "green.500",
                        textDecoration: "none",
                        backgroundColor: "green.100",
                      }}
                    >
                      New Admin
                    </Link>
                  </ListItem>
                  <ListItem m="0">
                    <Link
                      display="block"
                      py={2}
                      px={3}
                      borderRadius={4}
                      color={"black"}
                      _hover={{
                        color: "green.500",
                        textDecoration: "none",
                        backgroundColor: "green.100",
                      }}
                    >
                      Total Orders
                    </Link>
                  </ListItem>
                </UnorderedList>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Stack>

      <Stack pt="6">
        <Link py="1.3" color="#009ef7">
          <Flex justifyContent="space-between" alignItems="center">
            {" "}
            Avg. Client Rating{" "}
            <Text>
              <ArrowForwardIcon />
            </Text>
          </Flex>
        </Link>
        <Link
          py="1.3"
          borderTop="1px"
          borderTopStyle="dashed"
          borderColor="#e4e6ef"
          color="#009ef7"
        >
          <Flex justifyContent="space-between" alignItems="center">
            {" "}
            Instagram Followers
            <Text>
              <ArrowForwardIcon />
            </Text>
          </Flex>
        </Link>
        <Link
          py="1.3"
          borderTop="1px"
          borderTopStyle="dashed"
          borderColor="#e4e6ef"
          color="#009ef7"
        >
          <Flex justifyContent="space-between" alignItems="center">
            Google Ads CPC{" "}
            <Text>
              <ArrowForwardIcon />
            </Text>
          </Flex>
        </Link>
      </Stack>
    </Box>
  );
};

export default ExternalLinks;
