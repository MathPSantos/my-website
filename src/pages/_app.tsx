import { AppProps } from "next/app";

import { CommandProvider } from "../contexts/CommandContext";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CommandProvider>
  );
}

export default MyApp;
