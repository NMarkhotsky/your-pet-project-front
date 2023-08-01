import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const ContainerItem = styled.div`
  background-color: ${props => props.theme.colors.bgdColorAuth};
  box-shadow: ${props => props.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${selectTablet} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${selectDesktop} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${selectTablet} {
    width: 128px;
  }

  @media ${selectDesktop} {
    width: 161px;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:last-child {
    padding-bottom: 40px;
  }

  &:first-child {
    padding-top: 20px;
  }

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${selectDesktop} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const DeleteIcon = styled.button`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;
  cursor: pointer;

  @media ${selectTablet} {
    top: 8%;
    right: 2%;
  }

  transform: scale(1);
  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.1);
    transition: ${({ theme }) => theme.transitionHover};
  }
`;
