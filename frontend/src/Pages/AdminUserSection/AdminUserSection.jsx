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
  IconButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllAdmins,
  GetAllCustomer,
  GetSingleAdmin,
  GetSingleCustomer,
} from "../../redux/admin/admin.actions";
import Navbar from "../AdminDashboard/DashboardNavbar";
import { BiShow } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { RiFilterLine } from "react-icons/ri";
import ShowUserModal from "./Modals/ShowUserModal";
import DeleteUserModal from "./Modals/DeleteUserModal";

const AdminUserSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [admins, setAdmins] = useState(false);
  const [customers, setCustomers] = useState(true);

  const showUsers = (admins, customers) => {
    setCustomers(!customers);
    setAdmins(!admins);
  };

  //SingleUserModal
  const [singleUser, setSingleUser] = useState(false);
  const showSingleUser = (value) => {
    setTimeout(() => {
      setSingleUser(!value);
      onOpen();
    }, 200);
  };

  //Delete User Modal
  const [deleteUser, setDeleteUser] = useState(false);
  const showDeleteUser = (value) => {
    setTimeout(() => {
      setDeleteUser(!value);
      onOpen();
    }, 200);
  };

  const dispatch = useDispatch();
  const cancelRef = React.useRef();

  useEffect(() => {
    dispatch(GetAllCustomer());
    dispatch(GetAllAdmins());
  }, [dispatch]);

  const allAdmins = useSelector((store) => store.admin.allAdmins);
  console.log("All Admins: ", allAdmins);
  const allCustomers = useSelector((store) => store.admin.allCustomers);
  console.log("All Customer: ", allCustomers);

  return (
    <>
      <Navbar />

      <HStack w={"90%"} m="auto" justifyContent={"space-between"} mt={8} mb={8}>
        <Text fontWeight={600} fontSize="2rem">
          All WebSite Users
        </Text>
        <HStack>
          <Button
            variant="outline"
            bg={customers ? "green" : "red"}
            color="white"
            colorScheme="black"
            onClick={() => showUsers(admins, customers)}
          >
            Show Customers
          </Button>
          <Button
            variant="outline"
            bg={admins ? "green" : "red"}
            color="white"
            colorScheme="black"
            onClick={() => showUsers(admins, customers)}
          >
            Show Admins
          </Button>
        </HStack>
      </HStack>

      <TableContainer w="90%" h="450px" overflowY="scroll" margin={"auto"}>
        <Table variant="striped" colorScheme="teal">
          <Thead bg={"black"}>
            <Tr>
              <Th color="white">Sr.No</Th>
              <Th color="white">User ID</Th>

              <Th color="white">
                <HStack spacing={-1}>
                  <Text>User Name</Text>
                  <IconButton
                    icon={<RiFilterLine size={20} color="white" />}
                    variant="ghost"
                    size="sm"
                    _hover="none"
                  />
                </HStack>
              </Th>

              <Th color="white">
                <HStack spacing={-1}>
                  <Text>User Role</Text>
                  <IconButton
                    icon={<RiFilterLine size={20} color="white" />}
                    variant="ghost"
                    size="sm"
                    _hover="none"
                  />
                </HStack>
              </Th>

              <Th color="white">
                <HStack spacing={-1}>
                  <Text>User Email</Text>
                  <IconButton
                    icon={<RiFilterLine size={20} color="white" />}
                    variant="ghost"
                    size="sm"
                    _hover="none"
                  />
                </HStack>
              </Th>

              <Th color="white">Actions</Th>
            </Tr>
          </Thead>

          {customers && (
            <Tbody>
              {allCustomers.length > 0 &&
                allCustomers?.map((elem, index) => (
                  <Tr key={elem._id}>
                    <Td>{index + 1}</Td>
                    <Td>{elem._id}</Td>
                    <Td>
                      <Text>{elem.name}</Text>
                    </Td>
                    <Td>
                      <Text>
                        {elem.role === "customer" ? "Customer" : null}
                      </Text>
                    </Td>
                    <Td>
                      <Text>{elem.email}</Text>
                    </Td>

                    <Td>
                      <HStack>
                        <Icon
                          as={BiShow}
                          color="blue"
                          cursor="pointer"
                          size={18}
                          onClick={() => {
                            dispatch(GetSingleCustomer(elem._id));
                            setTimeout(() => showSingleUser(singleUser), 300);
                          }}
                        />

                        <Icon
                          as={MdDeleteOutline}
                          color="red"
                          fontSize={18}
                          cursor={"pointer"}
                          onClick={() => {
                            dispatch(GetSingleCustomer(elem._id));
                            setTimeout(() => showDeleteUser(deleteUser), 300);
                          }}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          )}

          {admins && (
            <Tbody>
              {allAdmins.length > 0 &&
                allAdmins?.map((elem, index) => (
                  <Tr key={elem._id}>
                    <Td>{index + 1}</Td>
                    <Td>{elem._id}</Td>
                    <Td>
                      <Text>{elem.adminName}</Text>
                    </Td>
                    <Td>
                      <Text>{elem.role === "admin" ? "Admin" : null}</Text>
                    </Td>
                    <Td>
                      <Text>{elem.email}</Text>
                    </Td>

                    <Td>
                      <HStack>
                        <Icon
                          as={BiShow}
                          color="blue"
                          cursor="pointer"
                          size={18}
                          onClick={() => {
                            dispatch(GetSingleAdmin(elem._id));
                            setTimeout(() => showSingleUser(singleUser), 300);
                          }}
                        />

                        <Icon
                          as={MdDeleteOutline}
                          color="red"
                          fontSize={18}
                          cursor={"pointer"}
                          onClick={() => {
                            dispatch(GetSingleAdmin(elem._id));
                            setTimeout(() => showDeleteUser(deleteUser), 300);
                          }}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>

      {singleUser && (
        <ShowUserModal
          isOpen={isOpen}
          onClose={onClose}
          value={singleUser}
          showSingleUser={showSingleUser}
        />
      )}

      {deleteUser && (
        <DeleteUserModal
          isOpen={isOpen}
          onClose={onClose}
          cancelRef={cancelRef}
          value={deleteUser}
          showDeleteUser={showDeleteUser}
        />
      )}
    </>
  );
};

export default AdminUserSection;
