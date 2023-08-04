import styled, { keyframes } from 'styled-components';
import { BaseSkeleton } from '../BaseSkeleton.styled';
import {
  selectDesktop,
  selectTablet,
} from '../../../../utils/selectMediaRequests';

const opacity = keyframes`
0%{
  opacity: 0.5;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0.5;
}
`;

export const FriendItemSkeleton = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 255px;

  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.bgdColorAuth};
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 20px;

  @media ${selectTablet} {
    border-radius: 40px;
    width: 342px;
    height: 263px;
  }

  @media ${selectDesktop} {
    width: 394px;
    height: 287px;

    transition: box-shadow ${({ theme }) => theme.transitionHover};

    &:last-child {
      margin-right: auto;
    }
  }
`;

export const FriendTitleSkeketon = styled(BaseSkeleton)`
  display: block;
  margin: 0 auto;

  height: 27px;
  width: 50%;
  border-radius: 20px;

  @media ${selectTablet} {
    border-radius: 40px;
  }
`;

export const FriendContentWrapperSkeleton = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media ${selectTablet} {
    gap: 12px;
  }
  @media ${selectDesktop} {
    gap: 16px;
  }
`;

export const FriendImageWrapperSkeleton = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 68px;

  background-color: #fbf0e7;

  & svg {
    animation: ${opacity} 1s ease infinite;
  }

  @media ${selectTablet} {
    width: 120px;
    height: 88px;
  }
  @media ${selectDesktop} {
    width: 158px;
    height: 104px;
  }
`;

export const FriendInfoListSkeleton = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media ${selectTablet} {
    gap: 16px;
  }
  @media ${selectDesktop} {
    gap: 16px;
  }
`;

export const FriendInfoItemSkeleton = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const FriendInfoTitleSkeleton = styled(BaseSkeleton)`
  width: 40%;
  height: 16px;
  margin: 0;

  border-radius: 8px;

  @media ${selectTablet} {
    height: 16px;
  }
  @media ${selectDesktop} {
    height: 16px;
  }
`;

export const FriendInfoTextSkeleton = styled(BaseSkeleton)`
  width: 60%;
  height: 16px;

  border-radius: 8px;

  @media ${selectTablet} {
    height: 16px;
  }
  @media ${selectDesktop} {
    height: 16px;
  }
`;
