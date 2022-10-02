import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1156px;
  padding: 0 1rem;
  margin: 5rem auto 0;
  justify-content: space-between;

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

export const Main = styled.main`
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  & > p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid red;
  border-radius: 6px 36px;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-origin: border-box;
  background-clip: padding-box, border-box;

  ${props => css`
    background-image: linear-gradient(
        ${({ theme }) => theme.background},
        ${({ theme }) => theme.background}
      ),
      linear-gradient(
        ${({ theme }) => theme.yellow},
        ${({ theme }) => theme.purple}
      );
  `}
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IconProps {
  backgroundColor: 'yellow' | 'purple' | 'yellow-dark';
}

export const ListIcon = styled.span<IconProps>`
  padding: 0.5rem;
  color: ${({ theme }) => theme.base.white};
  background: ${({ theme, backgroundColor }) => theme[backgroundColor]};
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
`;

export const AsideImage = styled.img``;
