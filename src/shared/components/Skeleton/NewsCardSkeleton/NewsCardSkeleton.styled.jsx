import styled from 'styled-components';
import { BaseSkeleton } from '../BaseSkeleton.styled';
import {
  selectDesktop,
  selectTablet,
} from '../../../../utils/selectMediaRequests';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 534px;
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.bgdColorAuth};
  transition: box-shadow 300ms ${({ theme }) => theme.transitionHover};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  }

  &::before {
    content: '';
    position: absolute;
    top: -14px;
    left: 0;
    width: 100%;
    height: 8px;
    width: 100%;

    transform: translateY(-100%);
    border-radius: 40px;
    background-image: ${({ theme }) => theme.colors.blueGradient};
  }

  @media ${selectTablet} {
    width: calc((100% - 32px) / 2);

    &::before {
      height: 8px;
    }
  }
  @media ${selectDesktop} {
    width: calc((100% - 32px * 2) / 3);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 252px;

  background-color: ${({ theme }) => theme.colors.bgdColorSecond};
  border-radius: 20px;

  @media ${selectTablet} {
    width: 336px;
  }

  @media ${selectDesktop} {
    width: 375px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 16px 12px 15px;
  row-gap: 16px;
  flex-grow: 1;

  @media ${selectTablet} {
    width: 336px;
  }

  @media ${selectDesktop} {
    width: 395px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 17px;
  width: 100%;
`;

export const NewsTitle = styled(BaseSkeleton)`
  width: 100%;
  height: 30px;

  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 5px;
  }

  @media ${selectDesktop} {
    width: 352px;
  }
`;

export const NewsBody = styled(BaseSkeleton)`
  width: 100%;

  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 4px;
  }

  @media ${selectDesktop} {
    width: 352px;
  }
`;

export const BottomInfoWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${selectDesktop} {
    width: 352px;
  }
`;

export const NewsDate = styled(BaseSkeleton)`
  width: 88px;
  height: 22px;

  border-radius: 8px;
`;

export const NewsLink = styled(NewsDate)``;
