import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/selectMediaRequests';

export const SearchContainer = styled.form`
    position: relative;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 24px;
    box-shadow: ${props => props.theme.boxShadow.main};

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.boxShadow.secondary};
    }

    @media ${selectTablet} {
        width: 608px;
    }

    @media ${selectDesktop} {
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 20px;
    padding-right: 80px;
    border: none;
    border-radius: 24px;

    font-family: ${props => props.theme.fonts.secondary.medium};
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 17px;
    letter-spacing: 0.04em;

    color: ${props => props.theme.colors.grey};

    @media ${selectTablet} {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 24px;
    }

    @media ${selectDesktop} {
    }
`;

export const BtnSearch = styled.button`
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;

    position: absolute;
    right: 12px;
    top: 10px;
    line-height: 0;
    
    background-color: transparent;

    &.active {
        right: 47px;
    }

    &:hover,
    &:focus {
        transform: scale(1.2);
    }

    @media ${selectTablet} {
        right: 15px;
    }

    @media ${selectDesktop} {
    }
`;

export const BtnCross = styled.button`
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;

    position: absolute;
    right: 13px;
    top: 10px;
    line-height: 0;

    background-color: transparent;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;
