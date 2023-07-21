import styled from "styled-components";

export const Label = styled.label``;

export const Text = styled.span`
  display: inline-block;
  color: ${props => props.checked ? "#fff" : "#54ADFF"};
  background-color: ${props => props.checked ? "#54ADFF" : "#CCE4FB"};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 40px;
  transition: all 300ms ease;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.56px;
`;

export const Input = styled.input`
  max-width: 100%;
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;