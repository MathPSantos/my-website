import Head from "next/head";

import { Layout } from "../components/Layout";
import { H1, H2, Span } from "../components/Typography";
import { ExperienceSection } from "../components/ExperienceSection";
import { Divider } from "../components/Divider";
import { Media } from "../components/Media";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus Santos</title>
      </Head>

      <Layout>
        <img src="/image/logo.png" alt="Matheus Santos" />

        <H1>Matheus Santos</H1>

        <H2>
          Engenheiro de Software Front-end a mais de 2 anos. Sou apaixonado por
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
      </Layout>
    </>
  );
}
