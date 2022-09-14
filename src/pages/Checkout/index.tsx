import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from 'phosphor-react';
import {
  Card,
  CardHeader,
  CheckoutContainer,
  Form,
  FormGroup,
  Input,
  PaymentOptions,
  RadioGroup,
} from './styles';

export const Checkout = () => {
  // const [paymentOption, setPaymentOption] =

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

          <Form>
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
          </Form>
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
        <Card></Card>
      </div>
    </CheckoutContainer>
  );
};
