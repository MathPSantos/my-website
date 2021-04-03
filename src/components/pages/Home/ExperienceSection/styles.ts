import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li + li {
    margin-top: 1.5rem;
  }
`;
