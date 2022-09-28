import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { Redirect } from 'wouter';

import successImg from '../../assets/success-illustration.svg';
import { usePayment } from '../../hooks/usePayment';
import { getPaymentType } from '../../utils/getPaymentType';
import {
  AsideImage,
  Container,
  List,
  ListContent,
  ListIcon,
  ListItem,
  Main
} from './styles';

export const Success = () => {
  const { address, paymentMethod } = usePayment();

  if (!address || !paymentMethod) {
    return <Redirect to='/' />;
  }
  return (
    <Container>
      <Main>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <List>
          <ListItem>
            <ListIcon backgroundColor='purple'>
              <MapPin size={16} weight='fill' />
            </ListIcon>
            <ListContent>
              <p>
                Entrega em <b>{`${address.street}, ${address.number}`}</b>
              </p>
              <p>{`${address.neighborhood} - ${address.city}, ${address.state}`}</p>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListIcon backgroundColor='yellow'>
              <Timer size={16} weight='fill' />
            </ListIcon>
            <ListContent>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListIcon backgroundColor='yellow-dark'>
              <CurrencyDollar size={16} weight='fill' />
            </ListIcon>
            <ListContent>
              <p>Pagamento na entrega</p>
              <strong>{getPaymentType(paymentMethod)}</strong>
            </ListContent>
          </ListItem>
        </List>
      </Main>
      <AsideImage src={successImg} />
    </Container>
  );
};
