import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${(props) => props.theme.base.card};
  width: 16rem;
  /* height: 19.375rem; */
  padding: 1.25rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.base.subtitle};
  }

  p {
    color: ${(props) => props.theme.base.label};
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.875rem;
  }

  img {
    margin-top: -3rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  margin-top: 0.75rem;

  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.625rem;
`;

export const Details = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base.text};

  gap: 0.5rem;

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CounterSelect = styled.span`
  background: ${(props) => props.theme.base.button};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;

  button {
    display: grid;
    place-content: center;
    all: unset;
    cursor: pointer;
    height: 1.25rem;
  }
`;

export const CartButton = styled.button`
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.base.card};
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
`;
