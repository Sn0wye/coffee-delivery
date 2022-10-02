import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: 0.875rem;
  background: ${props => props.theme.base.input};
  color: ${props => props.theme.base.text};
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid transparent;

  &::placeholder {
    color: ${props => props.theme.base.label};
  }

  &:focus {
    border: 1px solid ${props => props.theme['yellow-dark']};
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.danger};
  font-style: italic;
`;
