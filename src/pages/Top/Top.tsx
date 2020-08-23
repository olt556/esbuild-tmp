import * as React from 'react';
import { Header } from '@commons/components/Header';
import { Footer } from '@commons/components/Footer';
import { Main } from './components/Main';

const Top = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export { Top };
