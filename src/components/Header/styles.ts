import styled from 'styled-components';

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
  yellow: 'yellow-light',
} as const;

const ActionBoxTextColors = {
  purple: 'purple-dark',
  yellow: 'yellow-dark',
} as const;

interface ActionBoxProps {
  backgroundColor: keyof typeof ActionBoxBackgroundColors;
  textColor: keyof typeof ActionBoxTextColors;
}

export const ActionBox = styled.button<ActionBoxProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  background: ${(props) =>
    props.theme[ActionBoxBackgroundColors[props.backgroundColor]]};
  color: ${(props) => props.theme[ActionBoxTextColors[props.textColor]]};
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
