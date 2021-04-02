import { Span } from "../Typography";

import { Content } from "./styles";

export function Media() {
  return (
    <Content>
      <p>
        Veja meus projetos no <Span>@</Span>
        <a target="_blank" href="#">
          Github
        </a>
      </p>
      <p>
        Conecte comigo no <Span>@</Span>
        <a target="_blank" href="#">
          LinkedIn
        </a>
      </p>
    </Content>
  );
}
