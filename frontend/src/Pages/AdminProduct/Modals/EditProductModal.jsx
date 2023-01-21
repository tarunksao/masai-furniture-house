import React, { useState, useEffect } from "react";
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
  GetProducts,
  UpdateSingleProduct,
} from "../../../redux/admin/admin.actions";
import { getLocalData } from "../../../Utils/localStorageData";

const EditProductModal = ({
  isOpen,
  onClose,
  initialRef,
  value,
  showEditProduct,
  limit,
  page,
}) => {
  const [updatedDetails, setUpdatedDetails] = useState({
    brand_name: "",
    image_src: "",
    prod_desc: "",
    category: "",
    sub_category: "",
    price: 0,
    quantity: 0,
  });

  const singleproduct = getLocalData("singleProduct");
  console.log(singleproduct);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    setUpdatedDetails({
      brand_name: singleproduct.brand_name,
      image_src: singleproduct.image_src,
      prod_desc: singleproduct.prod_desc,
      category: singleproduct.category,
      sub_category: singleproduct.sub_category,
      price: singleproduct.price,
      quantity: singleproduct.quantity,
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [id]: value });
  };

  const show = (value) => {
    showEditProduct(value);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      updatedDetails.brand_name === "" ||
      updatedDetails.image_src === "" ||
      updatedDetails.category === "" ||
      updatedDetails.sub_category === "" ||
      updatedDetails.price === 0
    ) {
      return toast({
        position: "top",
        title: "All the fields are required to proceed!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(UpdateSingleProduct(singleproduct._id, updatedDetails)).then(() =>
      dispatch(GetProducts({ limit, page }))
    );
    toast({
      position: "top",
      title: "Product has been updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    show(value);
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
            Edit Product Here
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
                value={updatedDetails.brand_name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image Url</FormLabel>
              <Input
                type="url"
                id="image_src"
                value={updatedDetails.image_src}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Product Description</FormLabel>
              <Input
                type="text"
                id="prod_desc"
                value={updatedDetails.prod_desc}
                onChange={handleChange}
              />
            </FormControl>

            <HStack w="full" mt={5}>
              <FormControl w="40%">
                <FormLabel>Category</FormLabel>
                <Input
                  type="url"
                  id="category"
                  value={updatedDetails.category}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl w="60%">
                <FormLabel>Sub-Category</FormLabel>
                <Input
                  type="text"
                  id="sub-category"
                  value={updatedDetails.sub_category}
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
                  value={updatedDetails.price}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Quantity of Product</FormLabel>
                <Input
                  type="number"
                  id="quantity"
                  value={updatedDetails.quantity}
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

export default EditProductModal;
