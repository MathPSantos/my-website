import styled from "styled-components";

export const DefaultButton = styled.button`
  width: 3.25rem;
  height: 3.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.25rem;

  background: #1c1c1c;

  transition: background 0.2s;

  cursor: pointer;

  &:hover {
    background: #272727;
  }

  svg {
    width: 28px;
    height: 28px;

    color: #fafafa;
  }
`;
