import { PaymentMethod } from '../hooks/usePayment';

const paymentMethods = {
  'credit': 'Cartão de Crédito',
  'debit': 'Cartão de Débito',
  'cash': 'Dinheiro'
};

export const getPaymentType = (paymentMethod: PaymentMethod) => {
  return paymentMethods[paymentMethod];
};
