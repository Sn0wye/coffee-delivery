import styled from 'styled-components';

export const Card = styled.section`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${props => props.theme.base.card};
`;

export const CardHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h4 {
    color: ${props => props.theme.base.subtitle};
    font-weight: 400;
  }

  p {
    color: ${props => props.theme.base.text};
    font-size: 0.875rem;
  }
`;
