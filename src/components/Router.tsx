import { Route } from 'wouter';
import { Home } from '../pages/Home';

export const Router = () => {
  return (
    <>
      <Route path='/' component={Home} />
    </>
  );
};
