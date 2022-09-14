import styled, { css } from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 1156px;
  padding: 0 1rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;

  h3 {
    margin: 2.5rem 0 1rem;
    color: ${(props) => props.theme.base.subtitle};
    font-weight: 700;
    font-family: 'Baloo 2';
    font-size: 1.125rem;
  }
`;

export const Card = styled.section`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.base.card};
`;

export const CardHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h4 {
    color: ${(props) => props.theme.base.subtitle};
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme.base.text};
    font-size: 0.875rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 0.875rem;
  background: ${(props) => props.theme.base.input};
  color: ${(props) => props.theme.base.text};
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid transparent;

  &::placeholder {
    color: ${(props) => props.theme.base.label};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 0.75rem;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

interface RadioGroupProps {
  isActive: boolean;
}

export const RadioGroup = styled.button<RadioGroupProps>`
  padding: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.base.text};
  background: ${(props) => props.theme.base.button};
  font-size: 0.75rem;
  line-height: 1.6;
  display: flex;
  gap: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: ${(props) => props.theme.base.hover};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    `}
`;
