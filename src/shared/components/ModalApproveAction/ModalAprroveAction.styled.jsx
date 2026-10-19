import { fadeIn, riseIn } from '../../../theme/motion';
import { styled } from 'styled-components';
import { selectTablet } from '../../../utils/selectMediaRequests';

export const Backdrop = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100dvh;
  padding: 24px 12px;
  overflow-y: auto;
  animation: ${fadeIn} 180ms ease;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  width: min(100%, 400px);
  max-width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  position: relative;
  margin: auto;
  flex-shrink: 0;
  animation: ${riseIn} 240ms cubic-bezier(.22, 1, .36, 1);
  background-color: ${({ theme }) => theme.colors.bgdColor};

  @media ${selectTablet} {
    min-width: auto;
    width: 681px;
  }
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  top: 5px;
  right: 10%;

  position: absolute;

  line-height: 0;

  background: transparent;

  @media ${selectTablet} {
    right: 6%;
    top: 12px;
  }

  transform: scale(1);

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({ theme }) => theme.transitionHover};
  }
`;
