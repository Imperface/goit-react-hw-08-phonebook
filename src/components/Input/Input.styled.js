import styled from '@emotion/styled';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  row-gap: 10px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  & span {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
  & input {
    outline: none;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    transition: all 0.2s;
    background-color: transparent;
    color: inherit;

    &::placeholder {
      color: inherit;
      opacity: 0.5;
    }

    & focus {
      border-color: blue;
    }
  }
`;
