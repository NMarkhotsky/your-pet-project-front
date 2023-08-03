import styled, { keyframes } from 'styled-components';
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
    max-width: 480px;
  }

  @media ${selectTablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${selectDesktop} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

const blueColor = 'rgb(0, 0, 255)'; // Більш насичений синій колір
const yellowColor = 'rgb(255, 255, 0)'; // Більш насичений жовтий колір
const boxShadowRadius = '10px';

const boxShadowAnimation = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 ${boxShadowRadius} ${blueColor});
  }
  50% {
    filter: drop-shadow(0 0 ${boxShadowRadius} ${yellowColor});
  }
`;

export const IconTeamLookBox = styled.div`
  display: none;
  position: fixed;
  left: 0;
  bottom: 1%;
  z-index: 50;
  cursor: pointer;
  filter: drop-shadow(0 0 ${boxShadowRadius} ${blueColor}); /* Синя тінь */
  animation: ${boxShadowAnimation} 1s infinite;

  & > svg {
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
    stroke: rgba(0, 0, 255, 1);
  }

  @media ${selectDesktop} {
    display: block;
  }
`;
