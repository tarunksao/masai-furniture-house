// 
import {
    Box,
    Input,
    Text,
    FormLabel,
    Button,
    useToast,
    FormControl,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import { useDispatch, useSelector, shallowEqual } from "react-redux";
  import { useNavigate } from "react-router-dom";
import { userRegister } from "../../redux/auth/auth.actions";
import Navbar from "../../Components/Navbar";
  
  const UserRegister = () => {
    const [userDetail, setUserDetail] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const { successRegister, errorRegister } = useSelector((state) => {
      return {
        successRegister: state.auth.successRegister,
        errorRegister: state.auth.errorRegister,
      };
    }, shallowEqual);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
  
    useEffect(() => {
      if (successRegister) {
        toast({
          title: `User Registration Successfull, Redirecting to Login Page`,
          status: "success",
          duration: 1500,
          position: "top",
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (errorRegister) {
        toast({
                  title: `Something Went Wrong !!!`,
                  status: "error",
                  duration: 1500,
                  position: "top",
                  isClosable: true,
                });
      }
    }, [successRegister, errorRegister, toast, navigate]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (userDetail.name === "") {
        return toast({
          title: "Please enter the name",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      } else if (userDetail.email === "") {
        return toast({
          title: "Please enter the email",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      } else if (userDetail.password === "") {
        return toast({
          title: "Please enter the password",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      } else {
        console.log(userDetail);
        dispatch(userRegister(userDetail));
        setUserDetail({
          name: "",
          email: "",
          password: "",
        });
      }
    };
  
    return (
      <>
      <Navbar />
        <Box maxW='full' bgColor='bisque' h='100vh'>
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
                Register Here
              </Text>
            </Box>
            <FormControl mb="20px" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) =>
                  setUserDetail({ ...userDetail, name: e.target.value })
                }
                placeholder="Enter Name"
                w="100%"
                h="55px"
                border="2px solid coral"
                type="text"
                value={userDetail.adminName}
                
              />
            </FormControl>
            <FormControl mb="20px" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                onChange={(e) =>
                  setUserDetail({ ...userDetail, email: e.target.value })
                }
                placeholder="Enter Email Address"
                w="100%"
                h="55px"
                border="2px solid coral"
                type="email"
                value={userDetail.email}
                
              />
            </FormControl>
            <FormControl mb="20px" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) =>
                  setUserDetail({ ...userDetail, password: e.target.value })
                }
                placeholder="Enter Password"
                w="100%"
                h="55px"
                border="2px solid coral"
                type="password"
                value={userDetail.password}
                
              />
            </FormControl>
            <Box>
              <Button
                w="100%"
                bg="coral"
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
  
  export default UserRegister;
  