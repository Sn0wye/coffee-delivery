import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react';
import { useState } from 'react';
import imagemlegal from '../../assets/coffees/arab.png';
import {
  Actions,
  AddressForm,
  Card,
  CardHeader,
  CheckoutContainer,
  ConfirmOrderButton,
  CounterSelect,
  FormGroup,
  Input,
  OrderSummary,
  PaymentOptions,
  Price,
  RadioGroup,
  RemoveButton,
  SelectedCoffeeCard,
} from './styles';

export const Checkout = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <Card>
          <CardHeader>
            <MapPin size={22} color='#C47F17' />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeader>

          <AddressForm>
            <FormGroup>
              <Input type='text' placeholder='CEP' />
            </FormGroup>
            <Input type='text' placeholder='Rua' />
            <FormGroup>
              <Input type='text' placeholder='Número' />
              <Input type='text' placeholder='Complemento' />
            </FormGroup>
            <FormGroup>
              <Input type='text' placeholder='Bairro' />
              <Input type='text' placeholder='Cidade' />
              <Input type='text' placeholder='UF' />
            </FormGroup>
          </AddressForm>
        </Card>

        <Card>
          <CardHeader>
            <CurrencyDollar size={22} color='#8047F8' />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>

          <PaymentOptions>
            <RadioGroup isActive>
              <CreditCard size={16} color='#8047F8' /> <p>Cartão de crédito</p>
            </RadioGroup>
            <RadioGroup isActive>
              <Bank size={16} color='#8047F8' /> <p>Cartão de débito</p>
            </RadioGroup>
            <RadioGroup isActive={false}>
              <Money size={16} color='#8047F8' /> <p>Dinheiro</p>
            </RadioGroup>
          </PaymentOptions>
        </Card>
      </div>

      <div>
        <h3>Cafés selecionados</h3>

        <Card>
          <SelectedCoffeeCard>
            <img src={imagemlegal} alt='' />
            <div>
              <p>Expresso Tradicional</p>
              <Actions>
                <CounterSelect>
                  <button onClick={decrement}>
                    <Minus size={20} color='#8047F8' weight='fill' />
                  </button>
                  {counter}
                  <button onClick={increment}>
                    <Plus size={20} color='#8047F8' weight='fill' />
                  </button>
                </CounterSelect>
                <RemoveButton>
                  <Trash size={16} color='#8047F8' />
                  Remover
                </RemoveButton>
              </Actions>
            </div>
            <Price>R$9,90</Price>
          </SelectedCoffeeCard>

          <OrderSummary>
            <ul>
              <li>
                <span>Total de Itens</span>
                <span>R$ 29,79</span>
              </li>
              <li>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </li>
              <li>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </li>
            </ul>
          </OrderSummary>

          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </Card>
      </div>
    </CheckoutContainer>
  );
};
