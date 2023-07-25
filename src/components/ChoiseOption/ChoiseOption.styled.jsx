import styled from "styled-components";
import { selectTablet } from "../../utils";

export const MyForm = styled.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${selectTablet} {
    height: calc(100% - 140px);
  }
`;

export const ChooseOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 140px;
  gap: 12px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;

  @media ${selectTablet} {
    flex-direction: row-reverse;
  }
`;
