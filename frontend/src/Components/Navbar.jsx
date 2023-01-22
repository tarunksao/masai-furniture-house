import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../Pages/AdminDashboard/images/logo.png'
import { useSelector } from "react-redux";

export default function Navbar() {
    const {isAuth, userData} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    return (
        <Flex justifyContent='center' alignItems='center' gap='80px'>
            <Box bgColor='bisque' w='150px' p={4} my='10px'>
                <Link to='/'>
                    <Image src={logo} alt="" w='100%' />
                </Link>
            </Box>
            <Button variant='ghost' onClick={()=>navigate('/product/furniture')}>
                Furniture
            </Button>
            <Button variant='ghost' onClick={()=>navigate('/product/storage')}>
                Storage & Organization
            </Button>
            <Button variant='ghost' onClick={()=>navigate('/product/kitchen')}>
                Kitchen & Appliances
            </Button>
            {!isAuth ? (
                <>
                    <Button variant='ghost' onClick={()=>navigate('/register')}>
                        Register
                    </Button>
                    <Button variant='ghost' onClick={()=>navigate('/login')}>
                        Login
                    </Button>
                </>
            ) : (
                <>
                    <Button variant='ghost'>
                        {userData.name}
                    </Button>
                    <Button variant='ghost' onClick={()=>navigate('/logout')}>
                        Logout
                    </Button>
                </>
            )}
            <Button variant='ghost' onClick={()=>navigate('/cart')}>
                Cart
            </Button>
        </Flex>
    )
}
