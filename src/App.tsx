import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AppState from "./context/background/AppState";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Transfer from "./pages/Transfer";

const App = () => {
  return (
    <AppState>
      <Container bg="gray.50" p="10">
        <Container boxShadow="md" p="6" rounded="sm" bg="white" height="550px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="success" element={<Success />} />
          </Routes>
        </Container>
      </Container>
    </AppState>
  );
};

export default App;
