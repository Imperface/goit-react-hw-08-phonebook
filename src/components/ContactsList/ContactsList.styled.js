import styled from '@emotion/styled';

export const ContactsListWrapper = styled.div`
  height: 600px;
  border-radius: 20px;
  padding: 20px;
  background-color: #3a3a3a;
  width: 500px;
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
    text-align: center;
    padding: 20px;
  }
`;
