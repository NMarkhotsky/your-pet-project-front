import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const ContainerMainPage = styled.section`
  width: 100%;
  height: calc(100vh - 128px);

  @media ${selectDesktop} {
    position: relative;
    display: flex;
    margin-bottom: 0;
    width: 100%;
  }
`;

export const TextMainPage = styled.h1`
  z-index: 20;
  margin-top: 60px;
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xxxl};
  line-height: 1.4;
  color: ${props => props.theme.colors.text};
  text-align: left;

  @media ${selectTablet} {
    margin-top: 80px;
    margin-bottom: 27px;

    width: 588px;
    height: 200px;
    font-size: ${props => props.theme.fontSizes.gigantic};
  }

  @media ${selectDesktop} {
    margin-top: 188px;
    margin-bottom: 248px;

    width: 501px;
    height: 264px;
    font-family: ${props => props.theme.fonts.main.extraBold};
    line-height: 1.3;
  }
`;

export const ImageMainPage = styled.img`
  position: absolute;
  width: 100%;
  left: 0px;

  @media ${selectTablet} {
    transform: translateY(-10%);
  }

  @media ${selectDesktop} {
    width: auto;
    height: calc(100vh - 70px);
    left: auto;
    right: 0px;
    transform: none;
  }
`;
