import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
  row-gap: 20px;
  color: white;
  text-align: center;
  padding: 20px 0;
  & a {
    color: inherit;
    display: inline-flex;
    text-decoration: none;
    transition: all 0.5s;
    padding: 20px;
    &:hover {
      color: yellow;
    }
  }
`;
