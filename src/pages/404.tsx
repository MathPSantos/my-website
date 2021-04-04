import Head from "next/head";
import Link from "next/link";

import styled from "./404.module.scss";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404...</title>
      </Head>

      <main className={styled.container}>
        <h1>404</h1>
        <h2>
          We didn't find anything here... Go to{" "}
          <Link href="/">
            <a>home</a>
          </Link>
        </h2>
      </main>
    </>
  );
}
