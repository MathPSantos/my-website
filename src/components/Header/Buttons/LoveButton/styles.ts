import styled from "styled-components";

import { DefaultButton } from "../Default";

import { LoveButtonStyledProps } from "./interfaces";

export const Button = styled(DefaultButton)<LoveButtonStyledProps>`
  svg {
    ${({ isLoved }) => (isLoved ? "fill: #fafafa" : "")}
  }
`;
