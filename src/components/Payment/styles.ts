import styled, { css } from 'styled-components';

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface RadioGroupProps {
  isActive: boolean;
}

export const RadioGroup = styled.button<RadioGroupProps>`
  padding: 1rem;
  text-transform: uppercase;
  color: ${props => props.theme.base.text};
  background: ${props => props.theme.base.button};
  font-size: 0.75rem;
  line-height: 1.6;
  display: flex;
  gap: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: ${props => props.theme.base.hover};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${props => props.theme.purple};
      background: ${props => props.theme['purple-light']};
    `}
`;
