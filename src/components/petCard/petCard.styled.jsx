import { styled } from "styled-components";
import { selectDesktop, selectTablet } from "../../utils/selectMediaRequests";

export const List = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin-bottom: 60px;
    width: 100%;
    row-gap: 24px;

    @media ${selectTablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 32px;
    }

    @media ${selectDesktop} {
    }
`;

export const Item = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    padding-bottom: 24px;
    width: 280px;
    list-style: none;
    border-radius: 0 0 40px 40px;
    box-shadow: ${props => props.theme.boxShadow.main};
    background-color: ${props => props.theme.colors.white};

    @media ${selectTablet} {
        width: 336px;
    }

    @media ${selectDesktop} {
        width: 288px;
    }
`;

export const Div = styled.div`
    display: block;
    position: relative;
    margin-bottom: 20px;
    height: 288px;
    width: 100%;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Image = styled.img`
    overflow-clip-margin: content-box;
    overflow: clip;
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Div1 = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    left: 0;
    top: 12px;
    right: 12px;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 17px;
    width: 126px;
    border-radius: 0 16px 16px 0;
    font-size: ${props => props.theme.fontSizes.sm};
    font-family: ${props => props.theme.fonts.main.medium};
    line-height: 19px;
    background-color: ${props => props.theme.colors.blueLight};
    color: ${props => props.theme.colors.black};

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Div2 = styled.div`
    display: block;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    line-height: 0;
    color: transparent;
    background-color: ${props => props.theme.colors.blueLight};

    &:hover, focus {
    }

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const List1 = styled.ul`
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0;
    bottom: 12px;
    right: 8px;
    left: 8px;
    list-style: none;

    @media ${selectTablet} {
        left: 24px;
        right: 24px;
    }

    @media ${selectDesktop} {
        left: 12px;
        right: 12px;
    }
`;

export const Item1 = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    gap: 3px;
    border-radius: 16px;
    text-align: -webkit-match-parent;
    background-color: ${props => props.theme.colors.blueLight};
    color: ${props => props.theme.colors.black};
    cursor: pointer;

    &:hover, focus {
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
    }

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Span = styled.span`
    font-size: ${props => props.theme.fontSizes.xs};
    font-family: ${props => props.theme.fonts.main.semiBold};
    letter-spacing: .04em;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.colors.black};

    &:hover, focus {
        color: ${props => props.theme.colors.white};
    }

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 120px;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Text1 = styled.p`
    width: 231px;
    word-wrap: break-word;
    font-size: ${props => props.theme.fontSizes.xl};
    font-family: ${props => props.theme.fonts.main.bold};
    line-height: 33px;
    max-height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Button1 = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 0 auto;
    padding: 6px 28px;
    width: 248px;
    height: 38px;
    border: 2px solid #54adff;
    border-radius: 40px;
    color: ${props => props.theme.colors.blue};
    background-color: transparent;
    font-size: ${props => props.theme.fontSizes.md};
    font-family: ${props => props.theme.fonts.main.semiBold};
    letter-spacing: .04em;
    line-height: 22px;

    &:hover, focus {
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
    }

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const PetSpan1 = styled.span`
    z-index: 5;
`;
