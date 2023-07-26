import styled from 'styled-components';
import { selectTablet } from '../../../utils/selectMediaRequests';
import { Icon as IconSearch } from '../../../components/Icon/Icon';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 44px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.main};

  @media ${selectTablet} {
    width: 608px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 36px 13px 20px;
  border-radius: 24px;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue};
  };

  @media ${selectTablet} {
    padding: 10px 80px 10px 20px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const SearchButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-right: ${({ value }) => (value ? '10px' : '12px')};

  @media ${selectTablet} {
    margin-right: ${({ value }) => (value ? '10px' : '20px')};
  }

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({ theme }) => theme.transitionHover};
  }
`;

export const DeleteSearchButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;

  @media ${selectTablet} {
    margin-right: 20px;
  }

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({ theme }) => theme.transitionHover};
  }
`;

export const SearchIcon = styled(IconSearch)``;
