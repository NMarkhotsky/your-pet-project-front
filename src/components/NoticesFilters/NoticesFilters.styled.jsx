import styled from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${selectTablet}{
    flex-direction: row;
    gap: 12px;
    
  }
`;

export const Wrapper = styled.div`
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: transparent;

  @media ${selectTablet} {
    position: static;
  }
`;

export const OpenBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blueLight};
  color: ${({ theme }) => theme.colors.blue};

  transition: color var(--timing), background-color var(--timing);

  & svg use {
    stroke: ${props => props.theme.colors.bgdColor};
    transition: fill ${({ theme }) => theme.transitionHover};
  }

  &:hover svg use {
    stroke: ${props => props.theme.colors.white};
    transition: stroke ${({ theme }) => theme.transitionHover};
  }

  &:hover,
  &:focus svg use {
    stroke: ${props => props.theme.colors.white};
    transition: fill ${({ theme }) => theme.transitionHover};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border: none;
    background-color: transparent;

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: ${({ theme }) => theme.colors.blueGradient};
    opacity: 0;

    transition: opacity ${({ theme }) => theme.transitionHover};
  }

  @media ${selectTablet} {
    position: relative;
    padding: 9px;
    width: 152px;
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: transparent;

    font-family: ${props => props.theme.fonts.main.bold};
    font-size: ${props => props.theme.fontSizes.md};
    letter-spacing: 0.64px;
  }
`;

export const IconWraper = styled.div`
  position: relative;
  z-index: 5;

  & svg use {
    stroke: ${props => props.theme.colors.blue};
  }
  &:hover svg use,
  &:focus svg use {
    stroke: ${props => props.theme.colors.white};
    transition: stroke ${({ theme }) => theme.transitionHover};
  }
`;

export const OpenBtnLabel = styled.span`
  display: none;

  @media ${selectTablet} {
    display: block;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  margin-top: 50px;
  padding: 8px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};

  @media screen and (max-width: 767px) {
    right: 0;
    top: 0;
  }
  @media ${selectTablet} {
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 8px;
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.64px;

  color: ${({ theme }) => theme.colors.blue};
`;

export const SubMenu = styled.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 22px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blueLight};
  transition: all ${({ theme }) => theme.transitionHover};
`;

export const FilterBtn = styled.button`
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.blueLight};
  transition: ${({ theme }) => theme.transitionHover};
`;

export const BtnLabel = styled.span`
  font-family: ${props => props.theme.fonts.secondary.regular};

  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 18px;

  color: ${({ theme }) => theme.colors.blue};
`;

export const Form = styled.form`
  margin-top: 8px;
  padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${props => props.theme.fonts.secondary.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16px;

  color: ${({ theme }) => theme.colors.blue};
`;

export const Input = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;

  display: grid;
  place-content: center;

  line-height: 0;

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.blue};

  appearance: none;

  &::before {
    content: '';
    width: 0.85em;
    height: 0.85em;
    transform: scale(0);

    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.blue};

    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked {
    &::before {
      transform: scale(1);
    }

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-radius: 40px;
  color: ${props => props.theme.colors.textBtn};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: ${props => props.theme.colors.blueDark};

    transition: ${({ theme }) => theme.transitionHover};
  }

  @media screen and (max-width: 767px) {
      width: 40px;
      height: 40px;
  }
  @media ${selectTablet} {
    padding: 8px 20px;
  }
`;

export const ButtonSpan = styled.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`;
