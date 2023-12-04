import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  padding: 20px 0;
  text-align: center;

  background-color: #ffff8f50;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;

  p:not(:last-child) {
    padding-bottom: 20px;
  }

  & button {
    margin: 0 auto;
  }
`;
