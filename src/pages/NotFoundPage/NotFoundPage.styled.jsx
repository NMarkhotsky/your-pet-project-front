import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';

export const Container = styled.div`
  @media ${selectDesktop} {
    width: 100%;
    height: calc(100vh - 128px);
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;
  margin: auto;
  padding: 80px 0;
  width: 280px;

  @media ${selectTablet} {
    padding-top: 60px;
    width: 450px;
    font-family: ${props => props.theme.fonts.main.semiBold};
    font-size: ${props => props.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }

  @media ${selectDesktop} {
  }
`;

export const TitleBr = styled.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`;

export const CatImg = styled.div`
  margin: auto;
  margin-bottom: 60px;

  @media ${selectTablet} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${selectDesktop} {
    margin: auto;
    margin-bottom: 18px;
  }
`;

export const Img = styled.img`
  margin: auto;
  max-width: 280px;
  height: 123px;

  @media ${selectTablet} {
    max-width: 704px;
    height: 308px;
  }

  @media ${selectDesktop} {
    max-width: 822px;
    height: 360px;
  }
`;
