import styled from "styled-components";

import { Content as Media } from "../Media/styles";

export const Layout = styled.main`
  max-width: 1120px;

  margin: 0 auto;
  padding: 5.75rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    margin-bottom: 5rem;
  }

  h2 {
    max-width: 736px;
  }

  ${Media} {
    margin-top: 4.5rem;
  }
`;
