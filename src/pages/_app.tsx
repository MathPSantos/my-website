import { GetStaticProps } from "next";
import { AppProps } from "next/app";

import { CommandProvider } from "../hook/useCommand";

import { CommandMenu } from "../components/CommandsMenu";

import keysRoutes from "../../data/keyRoutes.json";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandProvider>
      <CommandMenu />
      <Component {...pageProps} />
    </CommandProvider>
  );
}

export default MyApp;
