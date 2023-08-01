import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 128px);
  margin-top: 24px;

  @media ${selectTablet} {
    margin-top: 60px;
  }

  @media ${selectDesktop} {
    margin-top: 40px;
  }
`;

export const FormBody = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.bgdColorAuth};
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${selectTablet} {
    width: ${props => (props.value === 2 ? '704px' : '458px')};
    max-width: ${props => (props.namepage === 'yourPet' ? '458px' : '704px')};

    padding: 20px 32px 20px 32px;
  }

  @media ${selectDesktop} {
    width: ${props => (props.value === 2 ? '822px' : '458px')};
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.35;
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.xxl};
    margin-left: 0px;
    text-align: center;
  }
`;
