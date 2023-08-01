import styled from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';


export const SectionNoticesPage = styled.section`
padding-bottom: 112px;
`;

export const TitleWrap = styled.div`
margin-bottom: 40px;
`;

export const FilterNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 43px 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  margin-top: 20px;
  position: relative;

  @media ${selectTablet} {
    /* width: 280px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;

