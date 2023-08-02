import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  transform: scale(1);
  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: ${({ theme }) => theme.transitionHover};
  }
`;
