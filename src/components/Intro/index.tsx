import { ShoppingCart } from 'phosphor-react';
import introIllustration from '../../assets/intro-illustration.svg';
import { IntroContainer, Main } from './styles';

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
            <ShoppingCart size={16} weight='fill' />
            Compra simples e segura
          </li>
          <li>
            <ShoppingCart size={16} weight='fill' />
            Compra simples e segura
          </li>
          <li>
            <ShoppingCart size={16} weight='fill' />
            Compra simples e segura
          </li>
          <li>
            <ShoppingCart size={16} weight='fill' />
            Compra simples e segura
          </li>
        </ul>
      </Main>

      <img src={introIllustration} alt='' />
    </IntroContainer>
  );
};
