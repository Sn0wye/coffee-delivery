import styled from 'styled-components';

export const SelectedCoffeeCard = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.base.button};

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.25rem;
    gap: 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.5rem;
  background: ${(props) => props.theme.base.button};
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${(props) => props.theme.base.text};
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.base.hover};
  }
`;

export const Actions = styled.div`
  display: flex;
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

export const Price = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.base.text};
  margin-left: auto;
`;

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      display: flex;
      justify-content: space-between;
    }
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
  text-transform: uppercase;

  color: ${(props) => props.theme.base.white};
  background: ${(props) => props.theme.yellow};
  transition: background-color 0.2s ease-in-out;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
