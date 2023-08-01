import styled from 'styled-components';
import { selectDesktop, selectPhone, selectTablet } from '../../utils';

export const LanguageSwitcherContainer = styled.div`
  /* position: absolute; */
  /* top: 2px; */
  /* right: 2px; */
  /* display: block; */

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.yellow};
  z-index: 1;

  @media ${selectPhone} {
    /* right: 50%; */
    /* transform: translateX(80%); */
    /* font-size: 8px; */
  }

  @media ${selectTablet} {
    /* font-size: 12px; */
  }

  @media ${selectDesktop} {
    /* font-size: 12px; */
    /* right: 2px; */
    /* transform: none; */
  }

  & > button {
    color: rgb(255, 193, 7);
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
`;
