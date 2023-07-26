import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';

export const List = styled.ul`
  width: 100%;
  margin-bottom: 40px;
  margin-top: 44px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 46px;

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 24px;
    margin-top: 62px;
    margin-bottom: 60px;
  }

  @media ${selectDesktop} {
    max-width: 1200px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 68px;
  }
`;
