import { Card } from '../Card';
import { CoffeeListContainer, List } from './styles';

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </CoffeeListContainer>
  );
};
