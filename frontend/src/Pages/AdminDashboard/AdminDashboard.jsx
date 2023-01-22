import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import ActiveOrders from "./Components/ActiveOrders";
import Earning from "./Components/Earning";
import ExternalLinks from "./Components/ExternalLinks";
import Overview from "./Components/PerformanceOverview";
import Professionals from "./Components/Professionals";
import Navbar from "./DashboardNavbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <Text
        color={"teal"}
        margin={"auto"}
        textAlign={"center"}
        fontSize={{ base: "lg", sm: "lg", md: "3xl", lg: "5xl" }}
        mt={"30px"}
      >
        Welcone to MFH Admin Dashboard
      </Text>
      <Text
        color={"#9370DB"}
        margin={"auto"}
        textAlign={"center"}
        fontSize={{ base: "lg", sm: "lg", md: "2xl", lg: "4xl" }}
      >
        Here is outcome of our services
      </Text>
      <Grid
        w="full"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={20}
        padding="20px 50px"
        mt={"30px"}
      >
        <GridItem>
          <ActiveOrders />
        </GridItem>
        <GridItem>
          <Earning />
        </GridItem>
        <GridItem>
          <ExternalLinks />
        </GridItem>
        <GridItem>
          <Professionals />
        </GridItem>
      </Grid>

      <Text
        color={"#9370DB"}
        margin={"auto"}
        textAlign={"center"}
        fontSize={{ base: "lg", sm: "lg", md: "2xl", lg: "4xl" }}
      >
        Yearly Performance Overview
      </Text>
      <Center>
        <Overview />
      </Center>
    </>
  );
};

export default AdminDashboard;
