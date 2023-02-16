import { ChakraProvider } from "@chakra-ui/react";
import theme from './customTheme'

export default function ThemeProvider ({ children }: { children?: React.ReactNode }) {
	return (
		<ChakraProvider theme={theme}>
			{children}
		</ChakraProvider>
	)
}