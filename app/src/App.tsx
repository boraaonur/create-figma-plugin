import { useState, useEffect } from "react";

import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { message } = event.data.pluginMessage;

      if (message.function === "your-function-name") {
        // do something with message
      }
    };
  }, []);

  return (
    <>
      <Box>
        <Text>Hello world</Text>
      </Box>
    </>
  );
}

export default App;
