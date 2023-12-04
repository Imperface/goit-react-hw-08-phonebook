import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  display: block;
  border-radius: 30px;
  padding: 10px 20px;
  color: #000;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  background-color: #34b6fe;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #c199f2;
    border-color: transparent;
    color: #23036a;
  }
  &:active&:not(:disabled) {
    background-color: #3e8e41;
    transform: translateY(4px);
  }
  &:disabled {
    cursor: wait;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    transform: translateY(4px);
  }
  & span {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    svg {
      width: 34px;
      height: 34px;
    }
  }
`;
