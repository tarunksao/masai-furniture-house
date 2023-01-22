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

const ShowUserModal = ({ isOpen, onClose, value, showSingleUser }) => {
  const singleUser = getLocalData("singleUser");
  console.log(singleUser);

  const show = (value) => {
    showSingleUser(value);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => show(value)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize={20} fontWeight={700}>
            Single User Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack
              w="full"
              h="90%"
              direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
            >
              <HStack>
                <Image
                  w="250px"
                  h="200px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uENsfHX_t2wf1PJ9YL2jw8XkWV7UXK7uiuT9WDHhlZbZthwUVQVjz1kwkCZp2njRQN4&usqp=CAU"
                  alt="User Pic"
                />
              </HStack>
              <VStack>
                <Text fontSize={18} fontWeight={700}>
                  {singleUser?.name ? singleUser.name : singleUser.adminName}
                </Text>
                <HStack>
                  <Text fontWeight={600}>Type of User:</Text>
                  <Text textTransform={"uppercase"}>{singleUser?.role}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight={600}>EmailId:</Text>
                  <Text>{singleUser?.email}</Text>
                </HStack>
              </VStack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowUserModal;
