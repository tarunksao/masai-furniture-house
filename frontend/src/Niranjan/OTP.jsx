import { Center, Heading,Image } from '@chakra-ui/react';
import {
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

export default function VerifyEmailForm() {
  return (
    <Flex   
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Thanks!
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Visit us again
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <Image src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"/>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
        </Stack>
      </Stack>
    </Flex>
  );
}