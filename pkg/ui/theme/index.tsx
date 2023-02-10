import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from './customTheme'

export default function ThemeProvider ({ children }: { children?: React.ReactNode }) {
	return (
		<ChakraProvider theme={extendTheme(theme)}>
			{children}
		</ChakraProvider>
	)
}