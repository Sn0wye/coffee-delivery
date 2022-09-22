import { coffeeOptions } from '../../data/coffee';
import { useCart } from '../../hooks/useCart';
import { Card } from '../Card';
import { CoffeeListContainer, List } from './styles';

export const CoffeeList = () => {
  const state = useCart();
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
