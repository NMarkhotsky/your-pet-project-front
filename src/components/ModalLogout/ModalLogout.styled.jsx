import { styled } from 'styled-components';

export const Modal = styled.div`
  width: 280px;
  padding: 77px 12px 60px 12px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 108px 155px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 44px;
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 1.2;
  font-family: ${props => props.theme.fonts.main.medium};
  text-align: center;
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 1.2;
    letter-spacing: 1.44px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;

  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.2;
  letter-spacing: 0.64px;
  font-family: ${props => props.theme.fonts.main.bold};

  @media screen and (min-width: 768px) {
    width: 129px;
    padding: 8px 20px;
  }
`;

export const CancelButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.blue};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blueGradient};
    border-color: ${({ theme }) => theme.colors.blueGradient};
  }
`;

export const YesButton = styled(Button)`
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blueGradient};
  }
`;
