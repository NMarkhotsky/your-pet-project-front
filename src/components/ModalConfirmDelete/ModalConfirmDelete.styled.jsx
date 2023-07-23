import { styled } from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const Modal = styled.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${selectTablet} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};

  @media ${selectTablet} {
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 49px;
  }
`;

export const Text = styled.p`
  margin-bottom: 44px;
  font-size: ${props => props.theme.fontSizes.sm};
  font-family: ${props => props.theme.fonts.main.medium};
  color: ${({ theme }) => theme.colors.black};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 22px;
  }
`;

export const PetName = styled.span`
  font-family: ${props => props.theme.fonts.main.bold};
`;
