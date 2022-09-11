import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'wouter';
import logoImg from '../../assets/logo.svg';
import { ActionBox, HeaderContainer, RightGroup } from './styles';

export const Header = () => {
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
        <ActionBox backgroundColor='yellow' textColor='yellow'>
          <ShoppingCart size={22} weight='fill' />
        </ActionBox>
      </RightGroup>
    </HeaderContainer>
  );
};
