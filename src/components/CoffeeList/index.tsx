import { coffeeOptions } from '../../data/coffee';
import { Card } from '../Card';
import { CoffeeListContainer, List } from './styles';

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {coffeeOptions.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  );
};
