import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

const SingleData = ({ image, brand, price, des, category }) => {
    console.log(image)
    return (
        <Container maxW={'5xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={image}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {brand}
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            {des}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        {category}
                                    </Text>
                                </ListItem>

                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Rs {''}{price}
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Water resistance:
                                    </Text>{' '}
                                    5 bar (40 metres / 167 ){' '}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button
                        rounded={'10px'}
                        base={'sm'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container >
    );
}

export default SingleData;