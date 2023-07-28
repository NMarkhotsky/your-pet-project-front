import { styled } from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const Modal = styled.div`
  width: 280px;
  padding: 68px 16px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bgdColor};

  @media ${selectTablet} {
    padding: 60px 129px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.text};

  @media ${selectTablet} {
    margin-bottom: 52px;
    font-size: ${props => props.theme.fontSizes.big};
    letter-spacing: 1.44px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.medium};
  line-height: normal;
  text-align: center;
  letter-spacing: 0.64px;
  color: ${({ theme }) => theme.colors.text};

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: 60px;
    letter-spacing: 0.96px;
  }
`;
