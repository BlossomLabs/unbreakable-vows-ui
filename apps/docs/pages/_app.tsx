import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { ThemeProvider } from 'ui'

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
		<ThemeProvider>
			<NextHead>
				<title>Docs</title>
			</NextHead>

			{mounted && <Component {...pageProps} />}
		</ThemeProvider>
  );
}

export default App;
