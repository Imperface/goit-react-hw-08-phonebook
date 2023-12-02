// import component
import { Container } from 'components';

// import styled component
import { LoaderWrapper } from './Loader.styled';

// other import
import { RingLoader } from 'react-spinners';

export const Loader = () => (
  <Container>
    <LoaderWrapper>
      <RingLoader color="#36d7b7" size={100} />
    </LoaderWrapper>
  </Container>
);
