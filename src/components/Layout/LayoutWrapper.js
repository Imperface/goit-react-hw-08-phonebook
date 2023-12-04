import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;
  & .loader {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  & main {
    flex-grow: 1;
  }
`;
