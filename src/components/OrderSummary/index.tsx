import { Minus, Plus, Trash } from 'phosphor-react';

import { useCart } from '../../hooks/useCart';
import { Card } from '../styled/Card';
import {
  Actions,
  ConfirmOrderButton,
  Container,
  CounterSelect,
  Price,
  RemoveButton,
  SelectedCoffeeCard
} from './styles';

export const OrderSummary = () => {
  const { total, products, changeQuantityById, removeProduct } = useCart();
  return (
    <Card>
      {products &&
        products.map(product => (
          <SelectedCoffeeCard key={product.id}>
            <img src={product.image} alt='' />
            <div>
              <p>{product.name}</p>
              <Actions>
                <CounterSelect>
                  <button
                    onClick={() => changeQuantityById(product.id, 'decrease')}
                  >
                    <Minus size={20} color='#8047F8' weight='fill' />
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => changeQuantityById(product.id, 'increase')}
                  >
                    <Plus size={20} color='#8047F8' weight='fill' />
                  </button>
                </CounterSelect>
                <RemoveButton onClick={() => removeProduct(product.id)}>
                  <Trash size={16} color='#8047F8' />
                  Remover
                </RemoveButton>
              </Actions>
            </div>
            <Price>{`R$ ${product.price.toFixed(2)}`}</Price>
          </SelectedCoffeeCard>
        ))}

      <Container>
        <ul>
          <li>
            <span>Total de Itens</span>
            <span>{`R$ ${total.value.toFixed(2)}`}</span>
          </li>
          <li>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </li>
          <li>
            <strong>Total</strong>
            <strong>{`R$ ${(total.value + 3.5).toFixed(2)}`}</strong>
          </li>
        </ul>
        <ConfirmOrderButton form='addressForm' type='submit'>
          Confirmar Pedido
        </ConfirmOrderButton>
      </Container>
    </Card>
  );
};
