import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  AddNewProduct,
  GetAllProduct,
} from "../../../redux/admin/admin.actions";

const NewProductModal = ({
  isOpen,
  onClose,
  initialRef,
  value,
  showAddProduct,
}) => {
  const [newProduct, setNewProduct] = useState({
    brand_name: "",
    image_src: "",
    prod_desc: "",
    category: "",
    sub_category: "",
    price: 0,
    quantity: 1,
  });

  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewProduct({ ...newProduct, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newProduct.brand_name === "" ||
      newProduct.image_src === "" ||
      newProduct.category === "" ||
      newProduct.price === 0
    ) {
      return toast({
        position: "top",
        title: "All the fields are required to proceed!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(AddNewProduct(newProduct)).then(() => dispatch(GetAllProduct()));
    toast({
      position: "top",
      title: "New Product has been added successfully.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    show(value);
  };

  const show = (value) => {
    showAddProduct(value);
    onClose();
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={() => show(value)}
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
                id="brand_name"
                value={newProduct.brand_name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image Url</FormLabel>
              <Input
                type="url"
                id="image_src"
                value={newProduct.image_src}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Product Description</FormLabel>
              <Input
                type="text"
                id="prod_desc"
                value={newProduct.prod_desc}
                onChange={handleChange}
              />
            </FormControl>

            <HStack w="full" mt={5}>
              <FormControl w="40%">
                <FormLabel>Category</FormLabel>
                <Input
                  id="category"
                  value={newProduct.category}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl w="60%">
                <FormLabel>Sub-Category</FormLabel>
                <Input
                  type="text"
                  id="sub_category"
                  value={newProduct.sub_category}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack w="full" justify="space-between" mt={5}>
              <FormControl>
                <FormLabel>Total Price</FormLabel>
                <Input
                  type="number"
                  id="price"
                  value={newProduct.price}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Quantity of Product</FormLabel>
                <Input
                  type="number"
                  id="quantity"
                  value={newProduct.quantity}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit} mr={3}>
              Save
            </Button>
            <Button onClick={() => show(value)} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewProductModal;
