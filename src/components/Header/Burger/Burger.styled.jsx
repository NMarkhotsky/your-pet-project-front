import styled from 'styled-components';
import { selectDesktop } from '../../../utils/selectMediaRequests';

export const StyledBurger = styled.div`
  display: none;
  z-index: 99;

  @media (max-width: 1279px) {
    display: flex;
  }

  overflow: ${props => (props.open ? 'hidden' : 'auto')};
`;

export const IconBurgerBox = styled.div`
  @media (max-width: 1279px) {
    display: block;
    margin-left: 24px;
  }

  @media ${selectDesktop} {
    display: none;
  }
`;
