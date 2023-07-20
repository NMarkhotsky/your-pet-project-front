import styled from "styled-components";
import { selectTablet } from "../../utils";

export const ButtonPrev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #54ADFF;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(20/16);
  letter-spacing: 0.64px;
  background-color: transparent;
  border: none;
  width: 100%;

  @media ${selectTablet} {
    flex-basis: 33%;
  }
`;
