import { Content } from "./styles";

export function Footer() {
  return (
    <Content>
      <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
    </Content>
  );
}
