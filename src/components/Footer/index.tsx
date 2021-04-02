import { Content } from "./styles";

export function Footer() {
  return (
    <Content>
      <p>
        {new Date().getFullYear()} © Matheus Santos - Compartilhe conhecimento
      </p>
    </Content>
  );
}
