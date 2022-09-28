import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { AddressForm } from '../../components/AddressForm';
import { OrderSummary } from '../../components/OrderSummary';
import { Payment } from '../../components/Payment';
import { AddressFormData, addressFormSchema } from '../../schemas/addressForm';
import { CheckoutContainer } from './styles';

export const Checkout = () => {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      city: '',
      compliment: '',
      neighborhood: '',
      number: undefined,
      state: '',
      street: '',
      zip: undefined
    }
  });

  return (
    <CheckoutContainer>
      <FormProvider {...addressForm}>
        <div>
          <h3>Complete seu pedido</h3>
          <AddressForm />

          <Payment />
        </div>

        <div>
          <h3>Cafés selecionados</h3>

          <OrderSummary />
        </div>
      </FormProvider>
    </CheckoutContainer>
  );
};
