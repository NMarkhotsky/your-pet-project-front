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
  background-image: url(${bgmobile});
  background-repeat: no-repeat;
  background-size: cover;

  height: calc(100vh - 50px);
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bgmobile2x});
  }

  @media ${selectTablet} {
    width: 720px;
    height: calc(100vh - 72px);
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

    width: 1280px;
    height: calc(100vh - 70px);
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgdesktop2x});
      background-position-y: -68px;
    }
  }
`;
