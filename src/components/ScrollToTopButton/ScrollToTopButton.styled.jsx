import styled from 'styled-components';

export const ContainerScroll = styled.div`
  background: ${props => props.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;
