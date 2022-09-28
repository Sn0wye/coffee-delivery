import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import { PaymentMethod, usePayment } from '../../hooks/usePayment';
import { Card, CardHeader } from '../styled/Card';
import { PaymentOptions, RadioGroup } from './styles';

export const Payment = () => {
  const { setPaymentMethod, paymentMethod } = usePayment();
  return (
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
        <RadioGroup
          isActive={paymentMethod === 'credit'}
          onClick={() => setPaymentMethod(PaymentMethod.CREDIT)}
        >
          <CreditCard size={16} color='#8047F8' /> <p>Cartão de crédito</p>
        </RadioGroup>
        <RadioGroup
          isActive={paymentMethod === 'debit'}
          onClick={() => setPaymentMethod(PaymentMethod.DEBIT)}
        >
          <Bank size={16} color='#8047F8' /> <p>Cartão de débito</p>
        </RadioGroup>
        <RadioGroup
          isActive={paymentMethod === 'cash'}
          onClick={() => setPaymentMethod(PaymentMethod.CASH)}
        >
          <Money size={16} color='#8047F8' /> <p>Dinheiro</p>
        </RadioGroup>
      </PaymentOptions>
    </Card>
  );
};
