import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  column-gap: 10px;
  & .loader {
    display: flex;
    margin: 0 auto;
    flex-grow: 1;
    justify-content: center;
  }
  & nav {
    flex-grow: 1;
  }
  & ul {
    display: flex;
    justify-content: space-around;
    column-gap: 10px;
  }
  & li {
    flex-grow: 1;
  }
  & a {
    background-color: #23036a;
    opacity: 0.5;
    padding: 20px 5px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    text-align: center;
    transition: all 0.5s;
    color: inherit;
    text-decoration: none;
    display: block;
    &.active,
    &:hover,
    &:focus {
      opacity: 1;
      color: #fff;
      background-color: #5600e8;
    }
  }
`;
