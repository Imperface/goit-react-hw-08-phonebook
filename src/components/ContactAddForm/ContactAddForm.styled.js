import styled from '@emotion/styled';
export const ContactAddFormWrapper = styled.div`
  margin: 0 auto;

  & form {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px dotted yellow;
  }
  & .error {
    max-width: 200px;
  }
`;
