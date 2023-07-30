import { styled } from 'styled-components';
import { selectTablet } from '../../utils/selectMediaRequests';

export const Modal = styled.div`
  display: block;
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
  z-index: 1200;

  backdrop-filter: blur(4px);
  background: rgba(97, 97, 97, 0.6);
`;

export const ModalCardWrapper = styled.div`
  position: absolute;
  top: 10%;
  min-height: 200px;
  min-width: 200px;

  border-radius: 20px;
  background-color: ${props => props.theme.colors.bgdColor};

  @media ${selectTablet} {
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;

  width: 24px;
  height: 24px;

  padding: 0;

  line-height: 0;

  border: none;

  background: transparent;

  @media ${selectTablet} {
    right: 24px;
    top: 24px;
  }

  transition: transform ${({ theme }) => theme.transitionHover};

  &:hover {
    transform: scale(1.2);
    transition: transform ${({ theme }) => theme.transitionHover};
  }
`;

export const ModalCard = styled.div`
  padding: 44px 12px 16px;
  width: 280px;

  @media ${selectTablet} {
    padding: 32px 32px 24px;
    width: 681px;
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
`;

export const ModalCardImage = styled.div`
  position: relative;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  @media ${selectTablet} {
    height: 298px;
    width: 262px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 0 0 40px 40px;

  object-fit: cover;
`;

export const SpanStatus = styled.span`
  position: absolute;
  top: 16px;
  left: 0;

  width: 126px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11px 17px;

  border-radius: 0 16px 16px 0;

  font-family: ${props => props.theme.fonts.main.semiBold};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 19px;

  background-color: ${props => props.theme.colors.blueLight};
  color: #111;
`;

export const ModalCardText = styled.div`
  @media ${selectTablet} {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`;

export const Title = styled.h4`
  width: 198px;

  margin-bottom: 20px;

  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  letter-spacing: -0.01em;
  line-height: 33px;

  color: ${props => props.theme.colors.text};

  @media ${selectTablet} {
    width: 321px;

    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 38px;
  }
`;

export const Table = styled.table`
  width: 256px;

  table-layout: fixed;
  border-color: inherit;

  font-family: ${props => props.theme.fonts.main.bold};
  text-indent: 0;

  @media ${selectTablet} {
    width: 340px;
  }
`;

export const Tbody = styled.tbody`
  display: table-row-group;

  border-color: inherit;

  vertical-align: middle;
`;

export const Tr = styled.tr`
  display: table-row;

  vertical-align: inherit;

  border-color: inherit;
`;

export const TdName = styled.td`
  display: table-cell;
  width: 80px;

  font-family: ${props => props.theme.fonts.main.semiBold};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 19px;
  vertical-align: inherit;

  color: ${props => props.theme.colors.text};

  @media ${selectTablet} {
    width: 120px;

    font-size: ${props => props.theme.fontSizes.md};
    line-height: 22px;
  }
`;

export const TdValue = styled.td`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16px;

  color: ${props => props.theme.colors.text};

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 22px;
  }
`;

export const Link = styled.a`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;

  color: ${props => props.theme.colors.yellow};

  cursor: pointer;
`;

export const Text = styled.p`
  margin-bottom: 12px;
  word-wrap: break-word;

  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  letter-spacing: 0.04em;
  line-height: 19px;

  overflow: hidden;
  text-overflow: ellipsis;

  @media ${selectTablet} {
    margin-bottom: 70px;

    font-size: ${props => props.theme.fontSizes.md};
    line-height: 24px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 40px;

`;

export const ButtonTextAdd = styled.span`
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  z-index: 5;
`;

export const ButtonLinkContact = styled.a`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 256px;
  height: 40px;

  padding: 8px 20px;
  border-radius: 40px;

  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.md};
  text-decoration: none;
  letter-spacing: 0.04em;
  line-height: 22px;

  border: 2px solid ${props => props.theme.colors.blue};

  color: ${props => props.theme.colors.blue};

  @media ${selectTablet} {
    width: 129px;
  }

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};

    transition: ${({ theme }) => theme.transitionHover};
  }

  &:hover > span {
    color: ${props => props.theme.colors.white};
    transition: ${({ theme }) => theme.transitionHover};
  }
`;

export const ButtonTextContact = styled.a`
  font-family: ${props => props.theme.fonts.main.bold};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.04em;
  line-height: 22px;

  color: ${props => props.theme.colors.blue};

  z-index: 5;

  cursor: pointer;
`;

export const Comments = styled.span`
  font-family: ${props => props.theme.fonts.main.bold};
`;
