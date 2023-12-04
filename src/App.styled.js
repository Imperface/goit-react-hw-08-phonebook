import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  background: linear-gradient(to left top, blue, green);
  min-height: 100vh;
  color: white;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
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
