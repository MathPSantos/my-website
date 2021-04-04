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
            Frontend Developer for over than 2 years. Passionate about web
            development, design and open-source projects. Nowadays I work ate{" "}
            <a
              className="foreign"
              href="https://www.intelitrader.com.br/"
              target="_blank"
            >
              Intelitrader
            </a>{" "}
            developing platforms for financial market. Out of work, I develop my
            own projects, in addition to play games, listen to music and think
            about the world.
          </h2>

          <ExperienceSection />

          <div className={styled.divider} />

          <div className={styled.media}>
            <p>
              See my projects on{" "}
              <a
                className="foreign"
                target="_blank"
                href="https://github.com/MathPSantos"
              >
                Github
              </a>
            </p>
            <p>
              Conect with me on{" "}
              <a
                className="foreign"
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
