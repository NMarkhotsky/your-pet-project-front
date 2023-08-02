import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${selectTablet} {
    gap: 12px;
  }

  @media ${selectDesktop} {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;

export const NoticeCategoriesNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${selectTablet} {
    gap: 12px;
  }
`;

export const NoticeCategoryItem = styled(NavLink)`
  display: flex;
  border: none;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;

  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  letter-spacing: 0.56px;

  background-color: ${props => props.theme.colors.blueLight};
  color: ${props => props.theme.colors.blue};

  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
