import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 1156px;
  padding: 0 1rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;

  h3 {
    margin: 2.5rem 0 1rem;
    color: ${props => props.theme.base.subtitle};
    font-weight: 700;
    font-family: 'Baloo 2';
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  color: ${props => props.theme.base.white};
  background: ${props => props.theme.yellow};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`;
