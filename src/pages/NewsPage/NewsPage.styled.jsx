import styled from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const Title = styled.h1`
  margin-bottom: 40px;
  margin-top: 80px;

  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 33px;

  text-align: center;

  color: ${props => props.theme.colors.text};

  @media ${selectTablet} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;
