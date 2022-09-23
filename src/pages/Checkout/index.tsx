import { AddressForm } from '../../components/AddressForm';
import { OrderSummary } from '../../components/OrderSummary';
import { Payment } from '../../components/Payment';
import { CheckoutContainer } from './styles';

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <AddressForm />

        <Payment />
      </div>

      <div>
        <h3>Cafés selecionados</h3>

        <OrderSummary />
      </div>
    </CheckoutContainer>
  );
};
