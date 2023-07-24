import styled from 'styled-components';
import { selectTablet } from '../../../utils/selectMediaRequests';

export const FriendsContainer = styled.div``;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${selectTablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
