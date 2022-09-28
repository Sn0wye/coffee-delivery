import { Route } from 'wouter';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Success } from '../pages/Success';

export const Router = () => {
  return (
    <DefaultLayout>
      <Route path='/' component={Home} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/success' component={Success} />
    </DefaultLayout>
  );
};
