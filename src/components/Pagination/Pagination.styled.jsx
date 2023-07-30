import { styled } from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const StyledPaginateContainer = styled.div`
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

    &[aria-disabled='true'] {
      opacity: 0.2;
      cursor: default;
    }

    &::after {
      content: '<';
      position: absolute;
      top: 100%;
      left: 100%;
      transform: translate(-75%, -55%);
      scale: 250%;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue};

      @media ${selectTablet} {
        transform: translate(-70%, -49%);
        scale: 350%;
      }
    }
  }

  .nextLink {
    @extend .link;

    &[aria-disabled='true'] {
      opacity: 0.2;
      cursor: default;
    }

    &::after {
      content: '>';
      position: absolute;
      top: 100%;
      left: 100%;
      transform: translate(-75%, -55%);
      scale: 250%;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue};

      @media ${selectTablet} {
        transform: translate(-70%, -49%);
        scale: 350%;
      }
    }
  }

  .active {
    @extend .item;

    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.bgdColor};
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
