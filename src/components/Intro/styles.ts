import styled from 'styled-components';

export const IntroContainer = styled.section`
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  gap: 3.5rem;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme.base.title};
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.base.subtitle};
    font-size: 1.25rem;
  }

  ul {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    margin-top: 4.125rem;

    li {
      display: flex;
      gap: 0.75rem;
    }
  }
`;

export const Icon = styled.span`
  padding: 0.5rem;
  color: ${(props) => props.theme.base.white};
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 9999px;
`;
