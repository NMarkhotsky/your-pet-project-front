import { styled } from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  gap: 24px;

  @media ${selectTablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;

    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  /* max-width: 480px; */
  width: 100%;
  height: auto;
  padding-bottom: 24px;

  border-radius: 0 0 40px 40px;

  box-shadow: ${props => props.theme.boxShadow.main};
  background-color: ${props => props.theme.colors.bgdColorAuth};

  @media ${selectTablet} {
    width: 336px;
  }

  @media ${selectDesktop} {
    width: 288px;
  }

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.02);
    transition: transform ${({ theme }) => theme.transitionHover};
  }
`;

export const ContainerPetInfo = styled.div`
  position: relative;
  display: block;

  height: 288px;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContainerPetStatus = styled.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TextStatus = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 126px;
  height: 32px;
  padding: 11px 17px;

  border-radius: 0 16px 16px 0;

  font-size: ${props => props.theme.fontSizes.sm};
  font-family: ${props => props.theme.fonts.main.medium};
  line-height: 19px;

  background-color: ${props => props.theme.colors.blueLight};
  color: ${props => props.theme.colors.black};
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: transparent;

  width: 40px;
  height: 40px;

  margin: 0;
  padding: 0;

  border: none;
  border-radius: 50%;

  line-height: 0;

  background-color: ${props => props.theme.colors.blueLight};

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({ theme }) => theme.transitionHover};
  }
`;

export const ListPetInfo = styled.ul`
  position: absolute;
  bottom: 12px;

  width: 100%;
  margin: 0 auto;
  /* padding: 0 8px; */
  display: flex;
  justify-content: space-evenly;
  gap: 12px;

  padding: 0;

  @media ${selectTablet} {
    gap: 24px;
  }

  @media ${selectDesktop} {
    gap: 12px;
  }
`;

export const ItemPetInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 80px;
  height: 28px;
  padding: 5px 5px;

  border-radius: 16px;

  background-color: ${props => props.theme.colors.blueLight};
  color: ${props => props.theme.colors.black};
  stroke: ${props => props.theme.colors.blue};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitionHover};
`;

export const SpanPetText = styled.span`
  font-family: ${props => props.theme.fonts.main.semiBold};
  font-size: ${props => props.theme.fontSizes.xs};
  text-align: center;
  letter-spacing: 0.48px;
`;

export const TextPetName = styled.p`
  display: flex;
  padding: 20px;

  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 33px;
`;
