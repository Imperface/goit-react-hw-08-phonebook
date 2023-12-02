import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  background-color: #1b1b1b;
  height: 100vh;
  overflow: hidden;
  color: white;
  & ul {
    list-style: none;
    margin: 0;
  }

  & p,
  h1,
  h2,
  h3 {
    margin: 0;
  }
  & .contentWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;
