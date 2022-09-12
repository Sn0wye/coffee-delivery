import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  max-width: 1156px;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  h2 {
    margin: 2rem 0 3.375rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 10rem;
`;
