import styled from 'styled-components';
import {
  selectDesktop,
  selectPhone,
  selectTablet,
} from '../../utils/selectMediaRequests';

export const ContainerList = styled.div`
  @media ${selectDesktop} {
    width: 821px;
  }
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${selectPhone} {
    align-items: baseline;
  }

  @media ${selectTablet} {
    align-items: flex-start;
  }
`;

export const ListTitle = styled.h2`
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text};
  margin-bottom: 24px;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const PetsCardList = styled.ul``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${props => props.theme.colors.textBtn};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
`;

export const Img = styled.img`
  margin: auto;
  max-width: 100px;
  border-radius: 30%;
  /* height: 131px; */

  @media ${selectTablet} {
    max-width: 250px;
    /* height: 330px; */
  }

  @media ${selectDesktop} {
    max-width: 292px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.black};
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
