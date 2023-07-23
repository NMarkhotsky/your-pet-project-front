import { styled } from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const Modal = styled.div`
  width: 280px;
  padding: 60px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${selectTablet} {
    padding: 60px 40px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.black};

  @media ${selectTablet} {
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: ${props => props.theme.fontSizes.sm};
  font-family: ${props => props.theme.fonts.main.medium};
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.56px;
  color: ${({ theme }) => theme.colors.black};

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.lg};
    letter-spacing: 0.8px;
    line-height: 28px;
  }
`;
