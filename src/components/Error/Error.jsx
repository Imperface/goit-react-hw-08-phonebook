import { ErrorWrapper } from './Error.styled';

export const Error = ({ text }) => (
  <ErrorWrapper className="error">
    <p>Oops, something went wrong. Status text: {text}.</p>
  </ErrorWrapper>
);
