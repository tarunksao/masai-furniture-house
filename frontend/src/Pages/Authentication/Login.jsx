import {
    Box,
    Input,
    Text,
    FormLabel,
    Button,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { userLogin } from "../../redux/auth/auth.actions";
  
  export const UserLogin = () => {
    const [loginForm, setLoginForm] = useState({
      email: "",
      password: "",
    });
  
    const { isAuth } = useSelector((state) => {
      return {
        isAuth: state.auth.isAuth,
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
          navigate("/");
        }, 1500);
      }
    }, [isAuth, navigate, toast]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
        if (loginForm.email === "") {
        return toast({
          title: "Please enter the email",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      } else if (loginForm.password === "") {
        return toast({
          title: "Please enter the password",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      } else {
        console.log(loginForm);
        dispatch(userLogin(loginForm));
        setLoginForm({
          email: "",
          password: "",
        });
      }
    };
  
    return (
      <Box>
        <Box
          alignItems="center"
          h="100px"
          border="2px solid black"
          bg="black"
          textAlign='center'
        >
  
          <Text
            display={{ base: "inline", sm: "inline", md: "inline", lg: "inline" }}
            fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "6xl" }}
            fontWeight="600"
            color="white"
          >
            Login
          </Text>
        </Box>
        <Box
          w={{ base: "90%", sm: "70%", md: "60%", lg: "30%" }}
          h="500px"
          margin="auto"
          marginTop="50px"
        >
          <Box mb="20px">
            <FormLabel>Enter Email</FormLabel>
            <Input
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              placeholder="Email Address"
              w="100%"
              h="55px"
              border="2px solid"
              type="email"
              value={loginForm.email}
            />
          </Box>
          <Box mb="20px">
            <FormLabel>Enter Password</FormLabel>
            <Input
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              placeholder="Password"
              w="100%"
              h="55px"
              border="2px solid"
              type="password"
              value={loginForm.password}
            />
          </Box>
          <Box>
            <Button
              w="100%"
              bg="#0693e3"
              h="55px"
              fontSize="20px"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  