import { AppProps } from "next/app";

import { CommandProvider } from "../contexts/CommandContext";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandProvider>
      <Component {...pageProps} />
    </CommandProvider>
  );
}

export default MyApp;
