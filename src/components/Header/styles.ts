import styled from "styled-components";

export const Content = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .actions {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 0.5rem;
    }
  }
`;
