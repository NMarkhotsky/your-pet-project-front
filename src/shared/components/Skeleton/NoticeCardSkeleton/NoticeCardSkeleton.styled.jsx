import styled from 'styled-components';
import { BaseSkeleton } from '../BaseSkeleton.styled';
import {
  selectDesktop,
  selectTablet,
} from '../../../../utils/selectMediaRequests';

const ListItem = styled.li`
  width: 100%;
  height: 425px;
  padding-bottom: 24px;
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  @media ${selectTablet} {
    width: 336px;
  }

  @media ${selectDesktop} {
    width: 288px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bgdColorAuth};
  background-position: center;
  background-size: cover;

  max-width: 100%;
  height: 288px;
`;

const Category = styled(BaseSkeleton)`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
  height: 32px;
  border-radius: 0px 16px 16px 0px;
`;

const FavoriteBtn = styled(BaseSkeleton)`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 20px;
`;

const Info = styled(BaseSkeleton)`
  width: 80px;
  padding: 5;
  border-radius: 16px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.bgdColorAuth};
  border-radius: 0px 0px 40px 40px;
`;

const Comments = styled(BaseSkeleton)`
  margin-top: 20px;

  width: 248px;
  height: 40px;

  border-radius: 10px;
`;

const MoreBtn = styled(BaseSkeleton)`
  width: 248px;
  height: 42px;

  border-radius: 40px;
`;

export {
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  InfoWrapper,
  Info,
  CardFooter,
  Comments,
  MoreBtn,
};
