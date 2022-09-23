import { MapPin } from 'phosphor-react';
import { Card, CardHeader } from '../styled/Card';
import { Form, FormGroup, Input } from './styles';

export const AddressForm = () => {
  return (
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
  );
};
