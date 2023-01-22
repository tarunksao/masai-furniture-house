import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import chart from "../images/chart.PNG";
import chart1 from "../images/chart1.PNG";

const Overview = () => {
  return (
    <Box
      mb={6}
      bg="white"
      boxShadow="md"
      borderRadius="10"
      p={5}
      position="relative"
    >
      <Stack>
        <Heading fontSize="19">Performance Overview</Heading>
        <Text alignItems="self-start" fontSize="14" textColor="gray.400">
          Users from all sources
        </Text>
      </Stack>
      <Stack>
        <Tabs>
          <TabList position="absolute" right="10" top="8">
            <Tab
              fontSize="13px"
              color="gray.400"
              fontWeight={500}
              _hover={{ textDecoration: "none", color: "green.500" }}
              _active={{ textDecoration: "none", color: "gray.500" }}
              _focus={{ textDecoration: "none", color: "gray.500" }}
            >
              Month
            </Tab>
            <Tab
              fontSize="13px"
              color="gray.400"
              fontWeight={500}
              _hover={{ textDecoration: "none", color: "green.500" }}
              _active={{ textDecoration: "none", color: "gray.500" }}
              _focus={{ textDecoration: "none", color: "gray.500" }}
            >
              Week
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              <Stack>
                <Flex fontSize="40" fontWeight="500" align="center">
                  <Text fontSize="25" pe="2" textColor="gray.500">
                    $
                  </Text>
                  8,55
                </Flex>
                <Text textColor="gray.500" pb={8}>
                  Avarage cost per interaction
                </Text>

                <Image src={chart} />
              </Stack>
            </TabPanel>
            <TabPanel p="0">
              <Stack>
                <Flex fontSize="40" fontWeight="500" align="center">
                  <Text fontSize="25" pe="2" textColor="gray.500">
                    $
                  </Text>
                  9,20
                </Flex>
                <Text textColor="gray.500">Avarage cost per interaction</Text>

                <Image src={chart1} pb={8} />
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default Overview;
