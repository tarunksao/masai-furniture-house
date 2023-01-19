import {
  Box,
  Input,
  Text,
  FormLabel,
  Checkbox,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Logo from "./images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loginfunction } from "../../redux/admin/admin.actions";

const AdminLogin = () => {
  const [adminDetail, setAdminDetail] = useState({
    adminName: "Admin",
    email: "admin@MFHadmin.com",
    password: "admin@MFH",
  });

  const { isAuth } = useSelector((state) => {
    return {
      isAuth: state.admin.isAuth,
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (isAuth) {
      toast({
        title: `LogIn Successfull`,
        status: "success",
        duration: 1000,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);
    }
  }, [isAuth, navigate, toast]);

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
      dispatch(Loginfunction(adminDetail));
      setAdminDetail({
        adminName: "Admin",
        email: "admin@MFHadmin.com",
        password: "admin@MFH",
      });
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        h="100px"
        border="2px solid black"
        bg="black"
        justifyContent="space-between"
        gap="30px"
      >
        <Image
          src={Logo}
          alt="MFH"
          cursor="pointer"
          marginLeft="4%"
          width="200px"
          h="80px"
        />

        <Text
          display={{ base: "inline", sm: "inline", md: "inline", lg: "inline" }}
          fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "6xl" }}
          fontWeight="600"
          //marginRight="15.5%"
          color="white"
        >
          Masai Furniture House
        </Text>
        <Box></Box>
      </Box>

      <Box textAlign="center">
        <Text
          fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "6xl" }}
          fontWeight="600"
          color="teal"
          marginTop="5px"
        >
          Welcome to MFH Admin Panel.
        </Text>
      </Box>

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
            Sign in here
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

        <Box mb="10px">
          <Checkbox size="lg" defaultChecked>
            Keep me signed in.
          </Checkbox>
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
            Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
