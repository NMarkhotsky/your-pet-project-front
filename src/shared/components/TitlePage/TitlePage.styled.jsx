import styled from 'styled-components';
import { selectTablet } from '../../../utils/selectMediaRequests';

export const TitleContainer = styled.div`
  margin-top: 40px;

  @media ${selectTablet} {
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  line-height: normal;

  color: ${({ theme }) => theme.colors.text};

  @media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.huge};
  }
`;
