import { styled } from 'styled-components';
import { Icon } from '../Icon/Icon';

export const Modal = styled.div`
  width: 280px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 49px;
  }
`;

export const Text = styled.p`
  margin-bottom: 44px;
  font-size: ${props => props.theme.fontSizes.sm};
  font-family: ${props => props.theme.fonts.main.medium};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 22px;
  }
`;

export const PetName = styled.span`
  font-family: ${props => props.theme.fonts.main.bold};
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
  position: relative;
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

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    background: ${({ theme }) => theme.colors.blueGradient};
    opacity: 0;

    transition: opacity ${({ theme }) => theme.transitionHover};
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    padding: 8px 20px;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
    &::before {
      opacity: 1;
    }
  }
`;

export const YesButton = styled(Button)`
  gap: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }
`;

export const TrashIcon = styled(Icon)`
  position: relative;
  z-index: 5;
`;
