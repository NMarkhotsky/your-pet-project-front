import styled from "styled-components";
import { generateColor } from "../../utils";

export const FormPagination = styled.ul`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PaginationItem = styled.li`
  flex-basis: calc(100% / 3 - 12px);
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Option = styled.p`
  color: ${generateColor};
  font-size: 10px;
  font-weight: 500;
  line-height: calc(14/10);
`;

export const Bar = styled.span`
  display: inline-block;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${generateColor};
`;