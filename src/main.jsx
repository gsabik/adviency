import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import AdviencyApp from "./AdviencyApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ChakraProvider>
		<AdviencyApp/>
	</ChakraProvider>
);
