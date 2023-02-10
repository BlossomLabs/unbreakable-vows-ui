import "@fontsource/crimson-pro/500.css";
import "@fontsource/crimson-pro/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from './customTheme'

export default function ThemeProvider ({ children }: { children?: React.ReactNode }) {
	return (
		<ChakraProvider theme={extendTheme(theme)}>
			{children}
		</ChakraProvider>
	)
}