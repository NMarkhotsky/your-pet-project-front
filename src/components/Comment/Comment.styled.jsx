import styled from "styled-components";
import { selectTablet } from "../../utils";

const generateBorderColor = ({ mistake }) => mistake === "true" ? "#F43F5E" : "#54ADFF";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
`;

export const Textarea = styled.textarea`
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${generateBorderColor};

  @media ${selectTablet} {
    height: 108px;
  }
`;