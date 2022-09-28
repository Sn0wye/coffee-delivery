import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1152px;
  padding: 2rem 1rem;
`;

export const RightGroup = styled.div`
  display: flex;
  justify-items: center;
  gap: 0.75rem;
`;

const ActionBoxBackgroundColors = {
  purple: 'purple-light',
  yellow: 'yellow-light'
} as const;

const ActionBoxTextColors = {
  purple: 'purple-dark',
  yellow: 'yellow-dark'
} as const;

interface ActionBoxProps {
  backgroundColor: keyof typeof ActionBoxBackgroundColors;
  textColor: keyof typeof ActionBoxTextColors;
  counter?: number;
  showCounter?: boolean;
}

export const ActionBox = styled.button<ActionBoxProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  background: ${props =>
    props.theme[ActionBoxBackgroundColors[props.backgroundColor]]};
  color: ${props => props.theme[ActionBoxTextColors[props.textColor]]};
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  position: relative;

  &:hover {
    filter: brightness(0.9);
  }

  &:after {
    content: ${({ counter }) => `'${counter}'`};
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    position: absolute;
    top: -20%;
    right: -20%;
    color: ${props => props.theme.base.white};
    background: ${props => props.theme['yellow-dark']};
    border-radius: 50%;
    visibility: hidden;
  }

  ${({ showCounter }) =>
    showCounter &&
    css`
      &:after {
        visibility: visible;
      }
    `}
`;
