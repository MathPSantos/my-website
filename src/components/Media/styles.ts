import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: 600;
    font-size: 1.25rem;

    text-align: left;

    color: #d3d3d3;

    & + p {
      margin-top: 0.75rem;
    }
  }
`;
