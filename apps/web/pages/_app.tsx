import "@rainbow-me/rainbowkit/styles.css";
import "@fontsource/crimson-pro/500.css";
import "@fontsource/crimson-pro/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { ThemeProvider } from 'ui'
import { chains, client } from "../wagmi";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider>
          <NextHead>
            <title>My App</title>
          </NextHead>

          {mounted && <Component {...pageProps} />}
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
