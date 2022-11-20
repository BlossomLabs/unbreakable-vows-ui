import "@fontsource/crimson-pro/500.css";
import "@fontsource/crimson-pro/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme/customTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme(theme)}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
