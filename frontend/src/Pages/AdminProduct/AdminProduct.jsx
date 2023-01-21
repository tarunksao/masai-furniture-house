import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  HStack,
  Icon,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  IconButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/admin/admin.actions";
import Navbar from "../AdminDashboard/DashboardNavbar";
import { BiShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AdminProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //To set and change the limits
  const [limit, setLimit] = useState(15);
  const newLimit = (value) => {
    setLimit(value);
  };

  //To set pages and change it
  const [page, setPage] = useState(1);
  const currentPage = (value) => {
    setPage(value);
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const product = useSelector((store) => store.admin.product);
  console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      limit: limit,
      page: page,
    };
    if (product) dispatch(GetProducts(params));
  }, [dispatch, GetProducts, limit, page]);

  return (
    <>
      <Navbar />

      <HStack w={"90%"} m="auto" justifyContent={"space-between"} mt={8} mb={8}>
        <Text fontWeight={600} fontSize="2rem">
          All Products
        </Text>
        <Button
          variant="outline"
          bg={"teal.200"}
          colorScheme="black"
          onClick={onOpen}
        >
          Add New Product
        </Button>
      </HStack>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize={20} fontWeight={600}>
            Add a new Product
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name of Product</FormLabel>
              <Input
                ref={initialRef}
                placeholder="New Product Name"
                type="text"
              />
            </FormControl>

            <HStack w="full" mt={5}>
              <FormControl w="60%">
                <FormLabel>Image Url</FormLabel>
                <Input type="url" />
              </FormControl>
              <FormControl w="40%">
                <FormLabel>Category</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>

            <HStack w="full" justify="space-between" mt={5}>
              <FormControl>
                <FormLabel>Total Price</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl>
                <FormLabel>Quantity of Product</FormLabel>
                <Input type="number" />
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer w="90%" h="450px" overflowY="scroll" margin={"auto"}>
        <Table variant="striped" colorScheme="teal">
          <Thead bg={"black"}>
            <Tr>
              <Th color="white">Product Id</Th>
              <Th color="white">Produt Name</Th>
              <Th color="white">Category</Th>
              <Th color="white">Price</Th>
              <Th color="white">Quanity</Th>
              <Th color="white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product.length > 0 &&
              product.map((elem) => (
                <Tr key={elem?._id}>
                  <Td>{elem?._id}</Td>
                  <Td>
                    <Text>{elem?.brand_name}</Text>
                  </Td>
                  <Td>
                    <Text>{elem?.category}</Text>
                  </Td>
                  <Td>
                    <Text>₹{elem?.price}</Text>
                  </Td>
                  <Td>
                    <Text>{elem?.quantity}</Text>
                  </Td>
                  <Td>
                    <HStack>
                      <Icon
                        as={BiShow}
                        color="blue"
                        cursor="pointer"
                        size={18}
                      />
                      <Icon as={GrEdit} cursor={"pointer"} />
                      <Icon
                        as={MdDeleteOutline}
                        color="red"
                        fontSize={18}
                        cursor={"pointer"}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      <HStack
        w="90%"
        height="40px"
        bg="black"
        m="auto"
        mt={5}
        p={"4px 25px"}
        justifyContent="flex-end"
        spacing={6}
      >
        <HStack>
          <Text color="white">Rows per page</Text>
          <Select
            color="black"
            w="75px"
            h="90%"
            bg="white"
            defaultValue={limit}
            onChange={(e) => newLimit(e.target.value)}
          >
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </Select>
        </HStack>

        <HStack>
          <Text color="white">
            {limit * page - limit + 1}-
            {limit * page < product.length ? limit * page : product.length} of{" "}
            {product.length}
          </Text>
          <HStack color="white">
            <IconButton
              icon={<MdKeyboardArrowLeft size={24} />}
              variant="outline"
              size="sm"
              _hover="none"
              isDisabled={page === 1}
              onClick={() => currentPage(page - 1)}
            />
            <IconButton
              icon={<MdKeyboardArrowRight size={24} />}
              variant="outline"
              size="sm"
              _hover="none"
              isDisabled={limit * page > product.length}
              onClick={() => currentPage(page + 1)}
            />
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

export default AdminProduct;
