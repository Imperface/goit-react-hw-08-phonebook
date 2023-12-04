import styled from '@emotion/styled';

export const ContactsListWrapper = styled.div`
  height: 600px;
  border-radius: 20px;
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  border: 1px dotted yellow;

  & .loader {
    display: flex;
    justify-content: center;
  }
  & p.notification {
    padding: 30px 0;
    text-align: center;
  }
  & h2 {
    padding-bottom: 20px;
  }
  & ul {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px 0;
    overflow-y: scroll;
    height: 400px;
  }
  & p {
    text-align: left;
  }
`;
