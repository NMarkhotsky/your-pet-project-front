import styled from 'styled-components';

export const ContainerItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 821px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: ${props => props.theme.boxShadow.main};
  border-radius: 40px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Image = styled.img`
  width: 161px;
  border-radius: 40px;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.main.regular};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const DeleteIcon = styled.div`
  display: block;
  position: absolute;
  top: 8%;
  right: 2%;
`;
