import styled from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styled.container}>
      <p>
        {new Date().getFullYear()} © Matheus Santos - Compartilhe conhecimento
      </p>
    </footer>
  );
}
