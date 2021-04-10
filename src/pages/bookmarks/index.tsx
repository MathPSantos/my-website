import Head from "next/head";

import { Header } from "../../components/Header";
import { BookmarksList } from "../../components/BookmarksList";

import styled from "./styles.module.scss";

export default function Bookmarks() {
  return (
    <>
      <Head>
        <title>Bookmarks | MathSantos</title>
      </Head>

      <>
        <Header />
        <main className={styled.content}>
          <h1>Bookmarks</h1>
          <h2>Only some links that worth...</h2>

          <BookmarksList />
        </main>
      </>
    </>
  );
}
