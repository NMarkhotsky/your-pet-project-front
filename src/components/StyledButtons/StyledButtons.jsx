import styled from "styled-components";
import { selectTablet } from "../../utils";

export const ButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 0px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(20/16);
  letter-spacing: 0.64px;
  background-color: #54ADFF;
  border-radius: 40px;
  border: none;
  transition: all 300ms ease;

  &:disabled {
    cursor: no-drop;
    background-color: #CCE4FB;
  }

  @media ${selectTablet} {
    flex-basis: 66%;
  }
`;

export const ButtonPrev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 12px;
  color: #54ADFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.64px;

  @media ${selectTablet} {
    flex-basis: 33%;
  }
`;