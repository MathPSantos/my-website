import Head from "next/head";
import Link from "next/link";

import { Container } from "../components/pages/404";
import { H1, H2 } from "../components/Typography";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404...</title>
      </Head>

      <Container>
        <H1>404</H1>
        <H2>
          Não encontramos nada por aqui... Ir para{" "}
          <Link href="/">
            <a>home</a>
          </Link>
        </H2>
      </Container>
    </>
  );
}
