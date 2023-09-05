import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ChakraProvider } from "@chakra-ui/react";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("root")!;
  const root = ReactDOM.createRoot(container);
  root.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
});
