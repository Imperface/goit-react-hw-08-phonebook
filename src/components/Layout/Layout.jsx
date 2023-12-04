import { Footer, Header } from 'components';

import { LayoutWrapper } from './LayoutWrapper';

export const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutWrapper>
);
