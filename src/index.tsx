import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
