import { Minus, Plus, ShoppingCart } from 'phosphor-react';
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
            <Minus size={14} color='#8047F8' weight='bold' />
            2
            <Plus size={14} color='#8047F8' weight='bold' />
          </Counter>
          <CartButton>
            <ShoppingCart size={22} weight='fill' />
          </CartButton>
        </Actions>
      </Details>
    </CardContainer>
  );
};
