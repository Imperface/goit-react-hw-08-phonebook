import styled from '@emotion/styled';
export const ContactItemWrapper = styled.li`
  display: flex;
  column-gap: 40px;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background: linear-gradient(to left top, green, blue);
  border-radius: 20px;

  & p {
    padding: 10px 0;
    text-align: left;
  }
`;
