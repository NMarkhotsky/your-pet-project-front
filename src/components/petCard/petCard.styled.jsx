import { styled } from "styled-components";

export const PetInfo = styled.li`
    background-color: #fff;
    border-radius: 0 0 40px 40px;
    box-shadow: 3px 8px 14px rgba(136,198,253,.19);
    padding-bottom: 24px;
    width: 288px;
    height: 456px;
`;

export const PetDiv = styled.div`
    height: 288px;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`;

export const PetImg = styled.img`
    width: 288px;
    height: 288px;
    object-fit: cover;
`;

export const PetDiv1 = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: absolute;
    right: 12px;
    top: 12px;
`;

export const PetP = styled.p`
    align-items: center;
    background-color: #cce4fb;
    border-radius: 0 16px 16px 0;
    color: #111;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 19px;
    padding: 11px 17px;
    width: 126px;
`;

export const PetDiv2 = styled.div`
`;

export const PetButton = styled.button`
    align-items: center;
    background-color: #c5dff6;
    border: none;
    border-radius: 50%;
    color: transparent;
    display: flex;
    height: 40px;
    justify-content: center;
    line-height: 0;
    margin: 0;
    padding: 0;
    width: 40px;
    &:hover, focus {
        // background-color: #3498db;
        transition: color 250ms cubic-bezier(0.215,0.61,0.355,1);
    }
`;

export const PetUl = styled.ul`
    bottom: 12px;
    display: flex;
    justify-content: space-between;
    left: 8px;
    list-style: none;
    position: absolute;
    right: 8px;
`;

export const PetLi1 = styled.li`
    cursor: pointer;
    align-items: center;
    background-color: #cce4fb;
    border-radius: 16px;
    color: #111;
    display: flex;
    gap: 3px;
    justify-content: center;
    width: 84px;
    &:hover, focus {
        background-color: #3498db;
        transition: background-color 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: #fff;
    }
`;

export const PetSpan = styled.span`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .04em;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // &:hover, focus {
    //     color: #fff;
    // }
`;

export const PetDiv3 = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`;

export const PetP1 = styled.p`
    word-wrap: break-word;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    max-height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 231px;
`;

export const PetButton1 = styled.button`
    align-items: center;
    background-color: transparent;
    border: 2px solid #54adff;
    border-radius: 40px;
    color: #54adff;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    gap: 12px;
    height: 38px;
    justify-content: center;
    letter-spacing: .04em;
    line-height: 22px;
    margin: 0 auto;
    padding: 6px 28px;
    position: relative;
    width: 248px;
    &:hover, focus {
        background-color: #3498db;
        transition: background-color 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: #fff;
    }
`;

export const PetSpan1 = styled.span`
`;
