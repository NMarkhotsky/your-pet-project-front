import styled from 'styled-components';
import {
  selectDesktop,
  selectTablet,
} from '../../../utils/selectMediaRequests';

export const FriendItem = styled.li`
  position: relative;

  flex: 1;
  min-width: 280px;
  height: auto;

  padding: 16px 12px;

  border-radius: 40px;

  box-shadow: ${({ theme }) => theme.boxShadow.main};

  background-color: #fff;

  @media ${selectTablet} {
    min-width: 336px;
  }

  @media ${selectDesktop} {
    min-width: 394px;
    flex: 0;
  }
`;

export const FriendWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
`;

export const FriendTitle = styled.a`
  display: block;
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.blue};
`;

export const FriendImgThumb = styled.div``;

export const Img = styled.img`
  width: 100px;
  height: 68px;

  @media ${selectTablet} {
    width: 124px;
    height: 88px;
  }

  @media ${selectDesktop} {
    width: 146px;
    height: 104px;
  }
`;

export const FriendInfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FriendInfo = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: normal;

  @media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};

    cursor: pointer;
  }
`;

export const FriendInfoTime = styled.p`
  position: relative;
`;

export const FriendInfoTitle = styled.p``;

export const FriendInfoData = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
`;

export const WorkDaysList = styled.ul`
  position: absolute;
  top: 107px;
  right: 90px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 130px;
  height: auto;
  padding: 12px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  box-shadow: ${({ theme }) => theme.boxShadow.main};

  background-color: #fff;

  transition: all ${({ theme }) => theme.transitionHover};
`;

export const WorkDayItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const WorkDays = styled.p``;

export const WorkTime = styled.p``;
