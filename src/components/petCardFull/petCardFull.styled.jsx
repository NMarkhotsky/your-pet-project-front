import { styled } from "styled-components";

export const PetFullDivMain = styled.div`
    display: block;
`;

export const PetFullDiv01 = styled.div`
    align-items: center;
    // -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background: rgba(97,97,97,.6);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1200;
`;

export const PetFullDiv02 = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 20px;
    min-height: 200px;
    min-width: 200px;
    position: absolute;
`;

export const PetFullButtonClose = styled.button`
    right: 24px;
    top: 24px;
    background: transparent;
    border: none;
    height: 24px;
    line-height: 0;
    padding: 0;
    position: absolute;
    width: 24px;
    cursor: pointer;
`;

export const PetFullDiv = styled.div`
    padding: 32px 32px 24px;
    width: 681px;
`;

export const PetFullDiv1 = styled.div`
    display: flex;    
    flex-direction: row;
    gap: 24px;
    margin-bottom: 12px;
`;

export const PetFullDiv2 = styled.div`
    height: 298px;
    width: 262px;
    margin: 0 auto;
    position: relative;
`;

export const PetFullImage = styled.img`
    border-radius: 0 0 40px 40px;
    height: 298px;
    object-fit: cover;
    width: 262px;
`;

export const PetFullSpan = styled.span`
    align-items: center;
    background-color: #cce4fb;
    border-radius: 0 16px 16px 0;
    color: #111;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    left: 0;
    line-height: 19px;
    padding: 11px 17px;
    position: absolute;
    top: 16px;
    width: 126px;
`;

export const PetFullDiv3 = styled.div`
    flex: 1 1;
`;

export const PetFullH4 = styled.h4`
    font-size: 28px;
    line-height: 38px;
    width: 321px;
    color: #000;
    font-weight: 700;
    letter-spacing: -.01em;
    margin-bottom: 20px;
`;

export const PetFullTable = styled.table`
    width: 340px;
    table-layout: fixed;
    border-color: inherit;
    text-indent: 0;
`;

export const PetFullTbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`;

export const PetFullTr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
`;

export const PetFullTd = styled.td`
    font-size: 16px;
    line-height: 22px;
    width: 120px;
    color: #000;
    font-weight: 600;
`;

export const PetFullTd1 = styled.td`
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    font-weight: 500;
`;

export const PetFullA = styled.a`
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ffc107;
    cursor: pointer;
    text-decoration: underline;
`;

export const PetFullP = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 70px;
    word-wrap: break-word;
    font-weight: 600;
    letter-spacing: .04em;
    // overflow: hidden;
    // text-overflow: ellipsis;
`

export const PetFullDiv4 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 17px;
    justify-content: flex-end;
`;

export const PetFullButton = styled.button`
    align-items: center;
    background-color: #54adff;
    border: none;
    border-radius: 40px;
    color: #fef9f9;
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 8px 20px;
    position: relative;
    &:hover, focus {
        background-color: #3498db;
        transition: background-color 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: #fff;
`;

export const PetFullSpan1 = styled.span`
    color: #fef9f9;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 22px;
`;

export const PetFullA1 = styled.a`
    width: 129px;
    align-items: center;
    border: 2px solid #54adff;
    border-radius: 40px;
    color: #54adff;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    letter-spacing: .04em;
    line-height: 22px;
    padding: 8px 20px;
    position: relative;
    text-decoration: none;
    &:hover, focus {
        background-color: #3498db;
        transition: background-color 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: #fff;
`;

export const PetFullSpan2 = styled.span`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 22px;
    cursor: pointer;
    color: #54adff;
    &:hover, focus {
        color: #fff;
`;
