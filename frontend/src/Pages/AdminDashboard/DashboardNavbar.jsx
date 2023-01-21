import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./images/logo.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { ImUserPlus } from "react-icons/im";
import AdminDetail from "./AdminDetail";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hamStyle = {
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
    backgroundColor: "#E6E6FA",
    padding: "0.5rem ",
    borderRadius: "0.4rem",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <Box w="100%">
      <Flex justify="space-around" alignItems="center" bg="black" p="0.5rem 0">
        <Link to="/admin/dashboard">
          <Box>
            <Image
              src={Logo}
              alt="MFH"
              cursor="pointer"
              marginLeft="4%"
              width="200px"
              h="60px"
            />
          </Box>
        </Link>

        <Flex
          display={["none", "none", "flex", "flex"]}
          justify="space-between"
          alignItems="center"
          gap="1.5rem"
        >
          <Link to="/admin/dashboard">
            <Flex alignItems="center" gap="0.3rem">
              <AiFillHome color="white" />
              <Text color="white">Dashboard</Text>
            </Flex>
          </Link>

          <Link to={"/admin/products"}>
            <Flex alignItems="center" gap="0.3rem">
              <BsFillCartCheckFill color="white" />
              <Text color="white">Products</Text>
            </Flex>
          </Link>

          <Flex alignItems="center" gap="0.3rem">
            <MdProductionQuantityLimits color="white" />
            <Text color="white">Orders</Text>
          </Flex>
          <Flex alignItems="center" gap="0.3rem">
            <HiUserGroup color="white" />
            <Text color="white">Users</Text>
          </Flex>
          <Link to={"/admin/register"}>
            <Flex alignItems="center" gap="0.3rem">
              <ImUserPlus color="white" />
              <Text color="white">Add Admin</Text>
            </Flex>
          </Link>

          <Box display="flex" alignItem="center" color="white">
            <AdminDetail />
          </Box>
        </Flex>

        <Box display={["inline-block", "inline-block", "none", "none"]}>
          <GiHamburgerMenu color="white" onClick={onOpen} size="1.5rem" />
        </Box>

        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore</DrawerHeader>
            <DrawerBody>
              <Link to="/admin/dashboard">
                <Flex m="25px auto" style={hamStyle}>
                  <AiFillHome />
                  <Text>Dashboard</Text>
                </Flex>
              </Link>

              <Link to={"/admin/products"}>
                <Flex m="25px auto" style={hamStyle}>
                  <BsFillCartCheckFill />
                  <Text>Products</Text>
                </Flex>
              </Link>

              <Flex m="25px auto" style={hamStyle}>
                <MdProductionQuantityLimits />
                <Text>Orders</Text>
              </Flex>
              <Flex m="25px auto" style={hamStyle}>
                <HiUserGroup />
                <Text>Users</Text>
              </Flex>
              <Link to="/admin/register">
                <Flex m="25px auto" style={hamStyle}>
                  <ImUserPlus />
                  <Text>Add Admin</Text>
                </Flex>
              </Link>

              <Box display="flex" style={hamStyle} bg="black" color="white">
                <AdminDetail />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;

// .hoverIcons:hover{
//   cursor: pointer;
//   color: blue;
// }
