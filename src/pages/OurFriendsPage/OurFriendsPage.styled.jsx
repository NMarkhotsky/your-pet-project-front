import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const Section = styled.section`
  padding-bottom: 75px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;

  @media ${selectTablet} {
    margin-top: 40px;
  }

  @media ${selectDesktop} {
    margin-bottom: 60px;
  }
`;
