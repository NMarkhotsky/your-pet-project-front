import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.bgdColor};
  padding: 40px 0;

  @media ${selectTablet} {
    padding: 62px 0;
  }

  @media ${selectDesktop} {
    display: flex;
    gap: 32px;
  }
`;
