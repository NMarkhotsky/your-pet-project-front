import styled from 'styled-components';

import {
  selectTablet,
  selectDesktop,
} from '../../../utils/selectMediaRequests';
import bgdesktop from '../../../assets/images/background/desktop/bg_desktop.png';
import bgdesktop2x from '../../../assets/images/background/desktop/bg_desktop@2x.png';
import bgtablet from '../../../assets/images/background/tablet/bg_tablet.png';
import bgtablet2x from '../../../assets/images/background/tablet/bg_tablet@2x.png';
import bgmobile from '../../../assets/images/background/mobile/bg_mobile.png';
import bgmobile2x from '../../../assets/images/background/mobile/bg_mobile@2x.png';

export const BackgrdImageContainer = styled.div`
  background-image: url(${bgmobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -68px;

  height: 100% @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${bgmobile2x});
  }

  @media ${selectTablet} {
    width: 768px;
    height: 1125px;
    background-image: url(${bgtablet});
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgtablet2x});
    }
  }

  @media ${selectDesktop} {
    background-image: url(${bgdesktop});
    width: 1280px;
    height: 702px;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgdesktop2x});
    }
  }
`;
