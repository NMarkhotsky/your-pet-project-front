import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const Container = styled.section`
  background-color: #fef9f9;
  padding: 40px 0;

  @media ${selectTablet} {
    padding: 62px 0;
  }

  @media ${selectDesktop} {
    display: flex;
    gap: 32px;
  }
`;
