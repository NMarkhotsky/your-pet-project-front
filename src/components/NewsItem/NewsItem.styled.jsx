import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';

export const ItemNews = styled.li`
  position: relative;
  height: 578px;
  background-color: ${props => props.theme.colors.bgdColorAuth};
  box-shadow: ${props => props.theme.boxShadow.main};
  border-radius: 20px;

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    transform: scale(1.02);
    transition: transform ${({ theme }) => theme.transitionHover};
  }

  &:before {
    position: absolute;
    content: '';
    top: -20px;
    display: block;
    height: 8px;
    width: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 1;
  }

  @media ${selectTablet} {
    height: 556px;
    flex-basis: calc((100% - 32px) / 2);

    &:before {
      top: -22px;
    }
  }

  @media ${selectDesktop} {
    height: 534px;
    flex-basis: calc((100% - 62px) / 3);
  }

  cursor: pointer;
`;

export const WrapperImage = styled.div`
  height: 252px;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
`;

export const ImageNews = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media ${selectTablet} {
  }

  @media ${selectDesktop} {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  height: 310px;

  @media ${selectTablet} {
    padding-left: 12px;
    padding-right: 12px;
    height: 288px;
  }

  @media ${selectDesktop} {
    height: 266px;
  }
`;

export const TitleNews = styled.h4`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${props => props.theme.fonts.main.bold};
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 33px;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.text};

  @media ${selectTablet} {
  }

  @media ${selectDesktop} {
  }
`;

export const TextNews = styled.p`
  margin-top: 16px;

  font-family: ${props => props.theme.fonts.main.regular};
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 22px;
  color: ${props => props.theme.colors.text};
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.span`
  font-family: ${props => props.theme.fonts.main.regular};
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 22px;
  color: ${props => props.theme.colors.grey};
`;

export const LinkReadMore = styled.a`
  text-decoration: none;
  font-family: ${props => props.theme.fonts.main.medium};
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 22px;
  text-align: right;
  color: ${props => props.theme.colors.blue};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.yellow};
  }
`;
