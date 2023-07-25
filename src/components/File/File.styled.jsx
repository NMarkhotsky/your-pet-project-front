import styled from "styled-components";

export const AddPhoto = styled.div`
  width: 112px;
  height: 112px;
  background-color: ${props => props.mistake === "true" ? "#FBCCCC" : "#CCE4FB"};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  &:hover {
    background-color: ${props => props.mistake === "true" ? "#ff9898" : "#98ccff"};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100px;
    background-color: ${props => props.mistake === "true" ? "#ff5454" : "#54ADFF"};
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all 300ms ease;
  }

  &::before {
    width: 60px;
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 60px;
  }
`;

export const LabelFile = styled.label`
  display: flex;
  position: relative;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.items};
  justify-content: ${props => props.justify};
  gap: ${props => props.gap};
`;

export const InputFile = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
`;

export const TextFile = styled.span`
  max-width: 80px;
`;