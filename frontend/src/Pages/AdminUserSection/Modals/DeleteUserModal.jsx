import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  DeleteSingleAdmin,
  DeleteSingleCustomer,
  GetAllAdmins,
  GetAllCustomer,
} from "../../../redux/admin/admin.actions";
import { getLocalData } from "../../../Utils/localStorageData";

const DeleteUserModal = ({
  isOpen,
  onClose,
  cancelRef,
  value,
  showDeleteUser,
}) => {
  const singleUser = getLocalData("singleUser");
  console.log(singleUser);

  const dispatch = useDispatch();
  const toast = useToast();

  const show = (value) => {
    showDeleteUser(value);
    onClose();
  };

  const handleDelete = () => {
    if (singleUser?.role === "admin") {
      dispatch(DeleteSingleAdmin(singleUser._id)).then(() =>
        dispatch(GetAllAdmins())
      );
    } else if (singleUser?.role === "customer") {
      dispatch(DeleteSingleCustomer(singleUser._id)).then(() =>
        dispatch(GetAllCustomer())
      );
    }

    toast({
      position: "top",
      title: "User has been deleted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    show(value);
  };
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => show(value)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => show(value)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteUserModal;
