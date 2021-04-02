import styled from "styled-components";
import { Layout } from "../../Layout";

import { Content as Media } from "../../Media/styles";

export const Container = styled(Layout)`
  header {
    margin-bottom: 5rem;
  }

  h2 {
    max-width: 736px;
  }

  ${Media} {
    margin-top: 4.5rem;
  }
`;
