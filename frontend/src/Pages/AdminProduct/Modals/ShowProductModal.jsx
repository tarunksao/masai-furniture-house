import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  VStack,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import { getLocalData } from "../../../Utils/localStorageData";

const ShowProductModal = ({
  isOpen,
  onClose,
  initialRef,
  value,
  showSingleProduct,
}) => {
  const singleproduct = getLocalData("singleProduct");
  console.log(singleproduct);

  const show = (value) => {
    showSingleProduct(value);
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
          <ModalHeader textAlign="center" fontSize={20} fontWeight={700}>
            Single Product
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack
              w="full"
              h="90%"
              direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
            >
              <HStack>
                <Image w="250px" h="200px" src={singleproduct?.image_src} />
              </HStack>
              <VStack>
                <Text fontSize={18} fontWeight={600}>
                  {singleproduct?.brand_name}
                </Text>
                <HStack>
                  <Text>Category:</Text>
                  <Text textTransform={"uppercase"}>
                    {singleproduct?.category}
                  </Text>
                </HStack>
                <HStack>
                  <Text>Quantity:</Text>
                  <Text>{singleproduct?.quantity}</Text>
                </HStack>
                <HStack>
                  <Text>Price:</Text>
                  <Text>₹{singleproduct?.price}</Text>
                </HStack>
              </VStack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowProductModal;
