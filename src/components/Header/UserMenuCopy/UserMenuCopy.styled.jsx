import styled from 'styled-components';

export const UserMenuBoxCopy = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const UserMenuButton = styled.button`
  display: flex;
  height: 40px;
  justify-content: center;
  width: 135px;
  gap: 8px;
  align-items: center;
  color: ${props => props.theme.colors.textBtn};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  font-size: ${props => props.theme.fontSizes.md};
  padding: 8px 0;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 40px;
  position: absolute;
  bottom: 5%;
  left: 5%;

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: ${props => props.theme.colors.blueDark};

    transition: ${({ theme }) => theme.transitionHover};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
