import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import introIllustration from '../../assets/intro-illustration.svg';
import { Icon, IntroContainer, Main } from './styles';

export const Intro = () => {
  return (
    <IntroContainer>
      <Main>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <ul>
          <li>
            <Icon backgroundColor='yellow-dark'>
              <ShoppingCart size={16} weight='fill' />
            </Icon>
            Compra simples e segura
          </li>
          <li>
            <Icon backgroundColor='yellow'>
              <Timer size={16} weight='fill' />
            </Icon>
            Entrega rápida e rastreada
          </li>
          <li>
            <Icon backgroundColor='brown'>
              <Package size={16} weight='fill' />
            </Icon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <Icon backgroundColor='purple'>
              <Coffee size={16} weight='fill' />
            </Icon>
            O café chega fresquinho até você
          </li>
        </ul>
      </Main>

      <img src={introIllustration} alt='' />
    </IntroContainer>
  );
};
