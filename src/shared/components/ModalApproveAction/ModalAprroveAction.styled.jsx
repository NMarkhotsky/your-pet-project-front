import { styled } from 'styled-components';
import { selectTablet } from '../../../utils/selectMediaRequests';

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  overflow-y: scroll;
`;

export const Modal = styled.div`
  min-height: 200px;
  min-width: 200px;
  border-radius: 20px;

  position: absolute;
  /* top: 10%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.bgdColor};
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
