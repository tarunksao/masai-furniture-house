import "./App.css";
import { Box, Heading } from "@chakra-ui/react";
import Top from "./Components/Top";
import AllRoutes_NS from "./Niranjan/AllRoutes_NS";
import { ProductPage } from "./Components/Product";
import AdminRoutes from "./Pages/AdminRoutes";

function App() {
  return (
    <Box>
      {/* <Top />
      <AllRoutes_NS /> */}
      <AdminRoutes />
    </Box>
  );
}

export default App;
