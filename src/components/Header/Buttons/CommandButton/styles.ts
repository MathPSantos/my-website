import styled from "styled-components";

import { DefaultButton } from "../Default";

export const Button = styled(DefaultButton)`
  svg {
    color: #1c1c1c;

    transition: color 0.2s;
  }

  &:hover {
    svg {
      color: #fafafa;
    }
  }
`;
