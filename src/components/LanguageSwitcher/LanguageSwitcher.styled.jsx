import styled from 'styled-components';

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.yellow};
  z-index: 1;

  & > button {
    color: rgb(255, 193, 7);

    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 30px;
    }
  }

  transform: scale(1);
  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: ${({ theme }) => theme.transitionHover};
  }
`;

export const LanguageSelect = styled.select`
  padding: 4px 4px;
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
  outline: none;

  option {
    background-color: #fff;
    color: #000;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 40px;
  }
`;
