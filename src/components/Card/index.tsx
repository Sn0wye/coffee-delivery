import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import coffee1 from '../../assets/coffees/coffee-1.png';
import {
  Actions,
  CardContainer,
  CartButton,
  Counter,
  Details,
  Price,
  Tag,
} from './styles';

export const Card = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((state) => state + 1);
  };

  const decrement = () => {
    if (counter <= 1) return;
    setCounter((state) => state - 1);
  };

  return (
    <CardContainer>
      <img src={coffee1} alt='' />
      <Tag>Tradicional</Tag>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <Details>
        <Price>
          R$ <span>9,90</span>
        </Price>
        <Actions>
          <Counter>
            <button onClick={decrement}>
              <Minus size={20} color='#8047F8' weight='fill' />
            </button>
            {counter}
            <button onClick={increment}>
              <Plus size={20} color='#8047F8' weight='fill' />
            </button>
          </Counter>
          <CartButton>
            <ShoppingCart size={22} weight='fill' />
          </CartButton>
        </Actions>
      </Details>
    </CardContainer>
  );
};
