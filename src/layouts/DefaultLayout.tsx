import { PropsWithChildren } from 'react';

import { Header } from '../components/Header';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
