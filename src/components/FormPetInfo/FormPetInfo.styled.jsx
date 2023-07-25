import styled from "styled-components";
import { selectTablet } from "../../utils";

export const FormPetInfo = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 120px);
  box-sizing: border-box;

  @media ${selectTablet} {
    gap: 20px;
    height: calc(100% - 140px);
  }
`;

