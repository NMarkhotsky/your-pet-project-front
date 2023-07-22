import { styled } from "styled-components";
import { selectDesktop, selectTablet } from "../../utils/selectMediaRequests";

export const Modal = styled.div`
    display: block;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const ModalLayout = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow-y: scroll;
    backdrop-filter: blur(4px);
    background: rgba(97,97,97,.6);
    z-index: 1200;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const ModalCardWrapper = styled.div`
    position: absolute;
    top: 10%;
    min-height: 200px;
    min-width: 200px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.white};

    @media ${selectTablet} {
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    @media ${selectDesktop} {
    }
`;

export const ButtonClose = styled.button`
    position: absolute;
    padding: 0;
    right: 12px;
    top: 12px;
    width: 24px;
    height: 24px;
    line-height: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    @media ${selectTablet} {
        right: 24px;
        top: 24px;
    }

    @media ${selectDesktop} {
    }
`;

export const ModalCard = styled.div`
    padding: 44px 12px 16px;
    width: 280px;

    @media ${selectTablet} {
        padding: 32px 32px 24px;
        width: 681px;
    }

    @media ${selectDesktop} {
    }
`;

export const ModalCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;

    @media ${selectTablet} {
        flex-direction: row;
        gap: 24px;
    }

    @media ${selectDesktop} {
    }
`;

export const ModalCardImage = styled.div`
    position: relative;
    margin: 0 auto;
    height: 240px;
    width: 240px;

    @media ${selectTablet} {
        height: 298px;
        width: 262px;
    }

    @media ${selectDesktop} {
    }
`;

export const Image = styled.img`
    border-radius: 0 0 40px 40px;
    height: 100%;
    object-fit: cover;
    width: 100%;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const SpanStatus = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 17px;
    top: 16px;
    left: 0;
    width: 126px;
    border-radius: 0 16px 16px 0;
    background-color: ${props => props.theme.colors.blueLight};
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontSizes.sm};
    font-family: ${props => props.theme.fonts.main.medium};
    line-height: 19px;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const ModalCardText = styled.div`

    @media ${selectTablet} {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    }

    @media ${selectDesktop} {
    }
`;

export const Title = styled.h4`
    margin-bottom: 20px;
    width: 198px;
    font-size: ${props => props.theme.fontSizes.xl};
    font-family: ${props => props.theme.fonts.main.bold};
    letter-spacing: -.01em;
    line-height: 33px;
    color: ${props => props.theme.colors.black};

    @media ${selectTablet} {
        font-size: ${props => props.theme.fontSizes.xxl};
        line-height: 38px;
        width: 321px;
    }

    @media ${selectDesktop} {
    }
`;

export const Table = styled.table`
    table-layout: fixed;
    width: 256px;
    border-color: inherit;
    text-indent: 0;

    @media ${selectTablet} {
        width: 340px;
    }

    @media ${selectDesktop} {
    }
`;

export const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const TdName = styled.td`
    display: table-cell;
    vertical-align: inherit;
    font-size: ${props => props.theme.fontSizes.sm};
    font-family: ${props => props.theme.fonts.main.semiBold};
    line-height: 19px;
    width: 80px;
    color: ${props => props.theme.colors.black};

    @media ${selectTablet} {
        font-size: ${props => props.theme.fontSizes.md};
        line-height: 22px;
        width: 120px;
    }

    @media ${selectDesktop} {
    }
`;

export const TdValue = styled.td`
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${props => props.theme.fontSizes.xs};
    font-family: ${props => props.theme.fonts.main.medium};
    line-height: 16px;
    color: ${props => props.theme.colors.black};

    @media ${selectTablet} {
        font-size: ${props => props.theme.fontSizes.md};
        line-height: 22px;
    }

    @media ${selectDesktop} {
    }
`;

export const Link = styled.a`
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.colors.yellow};

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const Text = styled.p`
    margin-bottom: 12px;
    word-wrap: break-word;
    font-size: ${props => props.theme.fontSizes.sm};
    font-family: ${props => props.theme.fonts.main.semiBold};
    letter-spacing: .04em;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media ${selectTablet} {
        margin-bottom: 70px;
        font-size: ${props => props.theme.fontSizes.md};
        line-height: 24px;
    }

    @media ${selectDesktop} {
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;

    @media ${selectTablet} {
        flex-direction: row;
        justify-content: flex-end;
        gap: 17px;
    }

    @media ${selectDesktop} {
    }
`;

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    gap: 8px;
    border: none;
    border-radius: 40px;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};

    &:hover, focus {
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
    };

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const ButtonTextAdd = styled.span`
    font-size: ${props => props.theme.fontSizes.md};
    font-family: ${props => props.theme.fonts.main.bold};
    letter-spacing: .04em;
    line-height: 22px;
    z-index: 5;
    color: ${props => props.theme.colors.white};

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;

export const ButtonLinkContact = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    width: 256px;
    height: 40px;
    border-radius: 40px;
    text-decoration: none;
    font-size: ${props => props.theme.fontSizes.md};
    font-family: ${props => props.theme.fonts.main.bold};
    letter-spacing: .04em;
    line-height: 22px;
    border: 2px solid ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};

    &:hover, focus {
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
    };

    @media ${selectTablet} {
        width: 129px;
    }

    @media ${selectDesktop} {
    }
`;

export const ButtonTextContact = styled.span`
    font-size: ${props => props.theme.fontSizes.md};
    font-family: ${props => props.theme.fonts.main.bold};
    letter-spacing: .04em;
    line-height: 22px;
    color: ${props => props.theme.colors.blue};
    z-index: 5;
    cursor: pointer;

    &:hover, focus {
        color: ${props => props.theme.colors.white};
    };

    @media ${selectTablet} {
    }

    @media ${selectDesktop} {
    }
`;
