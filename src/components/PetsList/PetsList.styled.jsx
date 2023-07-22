import styled from 'styled-components';

export const ContainerList = styled.div``;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ListTitle = styled.h2`
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => props.theme.colors.black};
  margin-bottom: 24px;
`;

export const PetsCardList = styled.ul``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${props => props.theme.colors.bgdColor};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
`;
