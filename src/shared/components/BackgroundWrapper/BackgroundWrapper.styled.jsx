import styled from 'styled-components';

import {
  selectTablet,
  selectDesktop,
} from '../../../utils/selectMediaRequests';
import bgdesktop from '../../../assets/images/background/desktop/bg_desktop.webp';
import bgdesktop2x from '../../../assets/images/background/desktop/bg_desktop@2x.webp';
import bgtablet from '../../../assets/images/background/tablet/bg_tablet.webp';
import bgtablet2x from '../../../assets/images/background/tablet/bg_tablet@2x.webp';
import bgmobile from '../../../assets/images/background/mobile/bg_mobile.webp';
import bgmobile2x from '../../../assets/images/background/mobile/bg_mobile@2x.webp';

export const BackgrdImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgmobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bgmobile2x});
  }

  @media ${selectTablet} {
    width: 100vw;
    height: 100vh;
    background-image: url(${bgtablet});
    background-position-y: -68px;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgtablet2x});
      background-position-y: -68px;
    }
  }

  @media ${selectDesktop} {
    background-image: url(${bgdesktop});
    background-position-y: -68px;
    height: 100vh;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgdesktop2x});
      background-position-y: -68px;
    }
  }

  z-index: -1;
`;
