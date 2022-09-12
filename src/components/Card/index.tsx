import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import {
  Actions,
  CardContainer,
  CartButton,
  Counter,
  Details,
  Price,
  Tag,
} from './styles';

interface Props {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export const Card = ({ name, description, price, tags, image }: Props) => {
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
      <img src={image} alt={`Image of a ${name}`} />
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <h3>{name}</h3>
      <p>{description}</p>

      <Details>
        <Price>
          R$ <span>{price.toFixed(2)}</span>
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
