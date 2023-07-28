import styled from 'styled-components';

export const ImgLoader = styled.img`
  position: absolute;
  top: calc(50% - 90px);
  left: calc(50% - 160px);
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 500ms linear, visibility 500ms linear;
  z-index: 999;
`;
