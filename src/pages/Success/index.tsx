import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import successImg from '../../assets/success-illustration.svg';
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
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </ListContent>
          </ListItem>
        </List>
      </Main>
      <AsideImage src={successImg} />
    </Container>
  );
};
