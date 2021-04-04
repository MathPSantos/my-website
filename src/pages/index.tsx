import Head from "next/head";

import styled from "./home.module.scss";

import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus Santos</title>
      </Head>

      <>
        <Header />

        <main className={styled.content}>
          <h1>Matheus Santos</h1>

          <h2>
            Desenvolvedor Frontend a mais de 2 anos. Sou apaixonado por
            desenvolvimento web, design, open-source e desenvolver projetos sem
            compromisso. Atualmente trabalho na{" "}
            <a href="https://www.intelitrader.com.br/" target="_blank">
              Intelitrader
            </a>{" "}
            desenvolvendo o front-end de plataformas para o mercado financeiro.
            Já por fora do trabalho, desenvolvo projetos próprios, além de
            jogar, escutar música e pensar sobre o mundo.
          </h2>

          <ExperienceSection />

          <div className={styled.divder} />

          <div className={styled.media}>
            <p>
              Veja meus projetos no{" "}
              <a target="_blank" href="https://github.com/MathPSantos">
                Github
              </a>
            </p>
            <p>
              Conecte comigo no{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mathpsantos/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </main>

        <Footer />
      </>
    </>
  );
}
