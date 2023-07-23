import { styled } from 'styled-components';

import { selectTablet } from '../../utils/selectMediaRequests';

export const Modal = styled.div`
  width: 280px;
  padding: 77px 12px 60px 12px;
  border-radius: 20px;

  @media ${selectTablet} {
    padding: 108px 155px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 44px;
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 1.2;
  font-family: ${props => props.theme.fonts.main.medium};
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.black};

  @media ${selectTablet} {
    margin-bottom: 48px;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 1.2;
    letter-spacing: 1.44px;
  }
`;
