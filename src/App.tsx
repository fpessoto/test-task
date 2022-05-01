import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AppState from "./context/background/AppState";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Transfer from "./pages/Transfer";

const App = () => {
  return (
    <AppState>
      <Container bg="gray.50" p="10">
        <Container boxShadow="md" p="6" rounded="sm" bg="white" height="550px">
          {/* <Home /> */}
          {/* <Transfer /> */}
          <Success />
        </Container>
      </Container>
    </AppState>
  );
};

export default App;
