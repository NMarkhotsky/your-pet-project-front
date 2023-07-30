import styled from 'styled-components';
import { generateColor, selectTablet } from '../../utils';

export const FormPagination = styled.ul`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  // margin-bottom: 24px;

  @media ${selectTablet} {
    // margin-bottom: 40px;
  }
`;

export const PaginationItem = styled.li`
  flex-basis: calc(100% / 3 - 12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

export const Option = styled.p`
  white-space: nowrap;
  color: ${generateColor};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 1.65;
  }
`;

export const Bar = styled.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${generateColor};
`;
