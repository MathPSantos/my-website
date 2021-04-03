import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Container } from "../components/pages/Home";
import { ExperienceSection } from "../components/pages/Home/ExperienceSection";
import { H1, H2, Span } from "../components/Typography";
import { Divider } from "../components/Divider";
import { Media } from "../components/Media";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  const router = useRouter();

  let keysArr = [];

  const keymap = {
    mb: "/blog",
    mh: "/",
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    keysArr.push(event.key);

    keysArr.map((key, index, arr) => {
      const command = keymap[key + arr[index + 1]];

      if (command) return router.push(command);
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Matheus Santos</title>
      </Head>

      <Container>
        <Header />

        <H1>Matheus Santos</H1>

        <H2>
          Desenvolvedor Frontend a mais de 2 anos. Sou apaixonado por
          desenvolvimento web, design, open-source e desenvolver projetos sem
          compromisso. Atualmente trabalho na <Span>@</Span>
          <a href="https://www.intelitrader.com.br/" target="_blank">
            Intelitrader
          </a>{" "}
          desenvolvendo o front-end de plataformas para o mercado financeiro. Já
          por fora do trabalho, desenvolvo projetos próprios, além de jogar,
          escutar música e pensar sobre o mundo.
        </H2>

        <ExperienceSection />

        <Divider />

        <Media />

        <Footer />
      </Container>
    </>
  );
}
