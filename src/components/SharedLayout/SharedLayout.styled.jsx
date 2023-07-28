import styled from 'styled-components';
import {
  selectPhone,
  selectTablet,
  selectDesktop,
} from '../../utils/selectMediaRequests';

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${selectPhone} {
    width: 320px;
  }

  @media ${selectTablet} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${selectDesktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const IconTeamLookBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 2%;
  z-index: 25;
  cursor: pointer;

  & > svg {
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
    stroke: rgba(0, 0, 255, 1);
  }
`;
