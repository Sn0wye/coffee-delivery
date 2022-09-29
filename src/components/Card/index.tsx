import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { Coffee } from '../../data/coffee';
import { useCart } from '../../hooks/useCart';
import {
  Actions,
  CardContainer,
  CartButton,
  CounterSelect,
  Details,
  Price,
  Tag,
  Tags
} from './styles';

interface Props {
  coffee: Coffee;
}

export const Card = ({ coffee }: Props) => {
  const { description, image, name, price, tags } = coffee;
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useCart();

  const handleAddProductToCart = () => {
    addProduct({
      ...coffee,
      quantity
    });

    toast.success('Café adicionado ao carrinho!', {
      position: 'bottom-right'
    });
  };

  const handleIncreaseQuantity = () => {
    setQuantity(state => state + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(state => state - 1);
  };

  return (
    <>
      <CardContainer>
        <img src={image} alt={`Imagem de um ${name}`} />
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <h3>{name}</h3>
        <p>{description}</p>
        <Details>
          <Price>
            R$ <span>{price.toFixed(2)}</span>
          </Price>
          <Actions>
            <CounterSelect>
              <button onClick={handleDecreaseQuantity}>
                <Minus size={20} color='#8047F8' weight='fill' />
              </button>
              {quantity}
              <button onClick={handleIncreaseQuantity}>
                <Plus size={20} color='#8047F8' weight='fill' />
              </button>
            </CounterSelect>
            <CartButton onClick={handleAddProductToCart}>
              <ShoppingCart size={22} weight='fill' />
            </CartButton>
          </Actions>
        </Details>
      </CardContainer>
      <Toaster
        position='bottom-center'
        toastOptions={{
          style: { boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }
        }}
      />
    </>
  );
};
