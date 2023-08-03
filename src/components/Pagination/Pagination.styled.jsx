import { styled } from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const StyledPaginateContainer = styled.div`
  margin-top: 60px;

  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  .pagination {
    padding: 8px 12px;
    border-radius: 45px;

    display: flex;
    justify-content: center;
    gap: 7px;

    box-shadow: ${({ theme }) => theme.boxShadow.secondary};
    list-style: none;
  }

  .item {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.blueLight};

    background-color: transparent;

    @media ${selectTablet} {
      width: 34px;
      height: 34px;
    }
  }

  .link {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${props => props.theme.fonts.secondary.regular};
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 15px;

    color: ${({ theme }) => theme.colors.blueLight};
    cursor: pointer;
  }

  .prevLink {
    @extend .link;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    margin-left: 2px;

    fill: ${({ theme }) => theme.colors.blue};

    &[aria-disabled='true'] {
      opacity: 0.2;
      cursor: default;
    }

    @media ${selectTablet} {
      margin-top: 3px;
      margin-left: 3px;
      width: 24px;
      height: 24px;
    }
  }

  .nextLink {
    @extend .link;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    margin-left: 2px;

    fill: ${({ theme }) => theme.colors.blue};

    &[aria-disabled='true'] {
      opacity: 0.2;
      cursor: default;
    }

    @media ${selectTablet} {
      margin-top: 3px;
      margin-left: 3px;
      width: 24px;
      height: 24px;
    }
  }

  .active {
    @extend .item;

    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.bgdColor};
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
