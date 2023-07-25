import styled from "styled-components";
import { generateColor, selectTablet } from "../../utils";

export const FormPagination = styled.ul`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media ${selectTablet} {
    margin-bottom: 40px;
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
  line-height: calc(14/10);

  @media ${selectTablet} {
    font-size: 16px;
    line-height: calc(26.5 / 16);
  }
`;

export const Bar = styled.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${generateColor};
`;