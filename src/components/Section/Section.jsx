// import component
import { Container } from 'components';

// import styled component
import { SectionWrapper } from './Section.styled';

export const Section = ({ title, children, className }) => {
  return (
    <SectionWrapper className={className}>
      <Container>
        {title && <h2 className="title">{title}</h2>}
        {children}
      </Container>
    </SectionWrapper>
  );
};
