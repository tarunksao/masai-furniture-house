import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Badge,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImUserTie } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { SIGNOUT } from "../../redux/admin/admin.types";

const AdminDetail = () => {
  const adminData = useSelector((store) => store.admin.adminData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSignOut = () => {
    setTimeout(() => {
      navigate("/admin/login");
    }, 2000);

    dispatch({ type: SIGNOUT });
    toast({
      title: "Signout Successfull !!!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <ImUserTie
            color={["black", "black", "white", "white"]}
            cursor="pointer"
          />
        </MenuButton>
        <MenuList
          m={["auto", "auto"]}
          maxW="300px"
          w={["90%", "90%", "300px", "300px"]}
          p="1rem 1.5rem"
        >
          <Text textAlign="center" fontSize="1.2rem" fontWeight="bold">
            Hi, {adminData.adminName}
          </Text>
          <Text textAlign="center" m="7px 0px" fontSize="1rem">
            {adminData.email}
          </Text>
          <Flex justify="center">
            <Badge
              w="60%"
              bg="#3662d8"
              color="white"
              p="0.3rem 0.5rem"
              borderRadius="20px"
              mb="5px"
              textAlign="center"
              fontSize="16px"
            >
              Admin
            </Badge>
          </Flex>
          <Box p="0.5rem">
            <MenuItem
              justifyContent="center"
              onClick={handleSignOut}
              w="80%"
              m="10px auto"
              p="0.4rem "
              color="white"
              bg="#3662d8"
              textAlign="center"
              fontSize="18px"
              borderRadius="1rem"
            >
              SignOut
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>
    </>
  );
};

export default AdminDetail;
