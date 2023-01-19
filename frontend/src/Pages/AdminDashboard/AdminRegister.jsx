import {
  Box,
  Input,
  Text,
  FormLabel,
  Checkbox,
  Button,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUpFunction } from "../../redux/admin/admin.actions";
import Navbar from "./DashboardNavbar";

const AdminRegister = () => {
  const [adminDetail, setAdminDetail] = useState({
    adminName: "Admin",
    email: "admin@MFHadmin.com",
    password: "admin@MFH",
  });

  const { successfullyCreated, createAccountError } = useSelector((state) => {
    return {
      successfullyCreated: state.admin.successfullyCreated,
      createAccountError: state.admin.createAccountError,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (successfullyCreated) {
      toast({
        title: `Account Created Successfull`,
        status: "success",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);
    }
  }, [successfullyCreated, toast, navigate]);

  useEffect(() => {
    if (createAccountError) {
      toast({
        title: `Something Went Wrong !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
  }, [createAccountError, toast]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminDetail.adminName === "") {
      return toast({
        title: "Please enter the name",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (adminDetail.email === "") {
      return toast({
        title: "Please enter the email",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (adminDetail.password === "") {
      return toast({
        title: "Please enter the password",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      console.log(adminDetail);
      dispatch(SignUpFunction(adminDetail));
      setAdminDetail({
        adminName: "Admin",
        email: "admin@MFHadmin.com",
        password: "admin@MFH",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box>
        <Box
          w={{ base: "90%", sm: "70%", md: "60%", lg: "30%" }}
          h="500px"
          margin="auto"
          marginTop="5px"
        >
          <Box mb="20px">
            <Text
              fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "4xl" }}
              fontWeight="600"
            >
              Register New Admin Here
            </Text>
          </Box>
          <Box mb="20px">
            <FormLabel>Enter First Name</FormLabel>
            <Input
              onChange={(e) =>
                setAdminDetail({ ...adminDetail, adminName: e.target.value })
              }
              placeholder="Admin Name"
              w="100%"
              h="55px"
              border="2px solid"
              type="text"
              value={adminDetail.adminName}
            />
          </Box>
          <Box mb="20px">
            <FormLabel>Enter Email</FormLabel>
            <Input
              onChange={(e) =>
                setAdminDetail({ ...adminDetail, email: e.target.value })
              }
              placeholder="Email Address"
              w="100%"
              h="55px"
              border="2px solid"
              type="email"
              value={adminDetail.email}
            />
            <Text mb={"8px"} fontSize="s">
              Please use "@MFHadmin.com" domain only.
            </Text>
          </Box>
          <Box mb="20px">
            <FormLabel>Enter Password</FormLabel>
            <Input
              onChange={(e) =>
                setAdminDetail({ ...adminDetail, password: e.target.value })
              }
              placeholder="Password"
              w="100%"
              h="55px"
              border="2px solid"
              type="password"
              value={adminDetail.password}
            />
          </Box>
          <Box>
            <Text></Text>
          </Box>

          <Box>
            <Button
              w="100%"
              bg="#0693e3"
              h="55px"
              fontSize="20px"
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminRegister;
