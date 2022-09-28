import { MapPin } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'wouter';

import { usePayment } from '../../hooks/usePayment';
import { AddressFormData } from '../../schemas/addressForm';
import { Card, CardHeader } from '../styled/Card';
import { Error, Form, FormGroup, Input } from './styles';

export const AddressForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useFormContext<AddressFormData>();

  const { setAddress } = usePayment();
  const [, setLocation] = useLocation();

  const onSubmit = (data: AddressFormData) => {
    setAddress(data);
    setLocation('/success');
  };

  return (
    <Card>
      <CardHeader>
        <MapPin size={22} color='#C47F17' />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CardHeader>

      <Form onSubmit={handleSubmit(onSubmit)} id='addressForm'>
        <FormGroup>
          <Input
            type='number'
            placeholder='CEP'
            {...register('zip', { valueAsNumber: true })}
          />
        </FormGroup>
        {errors.zip && <Error>{errors.zip.message}</Error>}

        <Input type='text' placeholder='Rua' {...register('street')} />
        {errors.street && <Error>{errors.street.message}</Error>}

        <FormGroup>
          <Input
            type='number'
            placeholder='Número'
            {...register('number', { valueAsNumber: true })}
          />
          <Input
            type='text'
            placeholder='Complemento'
            {...register('compliment')}
          />
        </FormGroup>
        {errors.number && <Error>{errors.number.message}</Error>}
        <FormGroup>
          <Input
            type='text'
            placeholder='Bairro'
            {...register('neighborhood')}
          />
          <Input type='text' placeholder='Cidade' {...register('city')} />
          <Input type='text' placeholder='UF' {...register('state')} />
        </FormGroup>
        {errors.neighborhood && <Error>{errors.neighborhood.message}</Error>}
        {errors.city && <Error>{errors.city.message}</Error>}
        {errors.state && <Error>{errors.state.message}</Error>}
      </Form>
    </Card>
  );
};
