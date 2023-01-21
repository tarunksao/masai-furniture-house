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
  GetProducts,
  DeleteProduct,
  GetAllProduct,
} from "../../../redux/admin/admin.actions";
import { getLocalData } from "../../../Utils/localStorageData";

const DeleteProductModal = ({
  isOpen,
  onClose,
  cancelRef,
  value,
  showDeleteProduct,
  limit,
  page,
}) => {
  const singleproduct = getLocalData("singleProduct");
  console.log(singleproduct);

  const dispatch = useDispatch();
  const toast = useToast();

  const show = (value) => {
    showDeleteProduct(value);
    onClose();
  };

  const handleDelete = () => {
    dispatch(DeleteProduct(singleproduct._id))
      .then(() => dispatch(GetProducts({ limit, page })))
      .then(() => dispatch(GetAllProduct()));

    toast({
      position: "top",
      title: "Product has been deleted successfully.",
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
              Delete Product
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

export default DeleteProductModal;
