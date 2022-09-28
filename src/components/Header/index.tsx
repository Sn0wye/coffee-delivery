import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'wouter';

import logoImg from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';
import { ActionBox, HeaderContainer, RightGroup } from './styles';

export const Header = () => {
  const { total } = useCart();
  return (
    <HeaderContainer>
      <Link to='/'>
        <img
          src={logoImg}
          alt='Coffee cup with a rocket icon inside it'
          title='Go to homepage'
        />
      </Link>
      <RightGroup>
        <ActionBox backgroundColor='purple' textColor='purple'>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </ActionBox>
        <Link to='/checkout'>
          <ActionBox
            backgroundColor='yellow'
            textColor='yellow'
            showCounter
            counter={total.items}
          >
            <ShoppingCart size={22} weight='fill' />
          </ActionBox>
        </Link>
      </RightGroup>
    </HeaderContainer>
  );
};
