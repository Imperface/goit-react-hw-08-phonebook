import styled from '@emotion/styled';

export const RegisterWrapper = styled.div`
  position: relative;
  padding: 50px 0;
  text-align: center;

  & .error {
    padding: 20px 0;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }
  & button {
    margin: 0 auto;
  }
`;
