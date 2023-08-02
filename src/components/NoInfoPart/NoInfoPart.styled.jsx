import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;
  padding-top: 60px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;

  @media ${selectTablet} {
    font-family: ${props => props.theme.fonts.main.semiBold};
    font-size: ${props => props.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }
`;

export const Img = styled.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;

  @media ${selectTablet} {
    max-width: 250px;
  }

  @media ${selectDesktop} {
    max-width: 292px;
  }
`;
