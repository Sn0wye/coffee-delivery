import styled, { DefaultTheme } from 'styled-components';

export const IntroContainer = styled.section`
  max-width: 1156px;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 5.875rem auto 0;
  gap: 3.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      width: 50%;
    }
  }
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    flex-wrap: wrap;
    margin-top: 4.125rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      white-space: nowrap;
    }
  }
`;

interface IconProps {
  backgroundColor: 'yellow' | 'brown' | 'purple' | 'yellow-dark';
}

const backgroundColor = (
  theme: DefaultTheme,
  variant: IconProps['backgroundColor']
) => {
  const { text } = theme.base;

  switch (variant) {
    case 'brown': {
      return text;
    }
    default: {
      return theme[variant];
    }
  }
};

export const Icon = styled.span<IconProps>`
  padding: 0.5rem;
  color: ${(props) => props.theme.base.white};
  background: ${(props) => backgroundColor(props.theme, props.backgroundColor)};
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
`;
