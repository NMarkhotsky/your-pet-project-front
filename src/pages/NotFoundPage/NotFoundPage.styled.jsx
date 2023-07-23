import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';

export const Title = styled.h1`
  margin: 80px auto;
  width: 280px;
  height: 66px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  font-family: 'Manrope';
  font-style: normal;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.black};

  @media ${selectTablet} {
    margin-bottom: 80px;
    margin-top: 60px;
    width: 450px;
    height: 42px;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
    text-align: center;
  }

  @media ${selectDesktop} {
    margin-top: 71px;
    width: 450px;
    height: 42px;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
  }
`;
export const TitleBr = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  padding: 0 100px;
  font-family: 'Manrope';
  font-style: normal;
  text-align: center;
  @media ${selectTablet} {
    padding: 0;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    text-align: center;
  }

  @media ${selectDesktop} {
    padding: 0;
  }
`;
// ----------------------------------------------------
export const Digit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Manrope;
  //   font-size: 326.31px;
  font-style: normal;
  font-weight: 800;
  //   line-height: 424.203px
  //   margin: 0 20px 60px 20px;
  //   width: 280px;
  //   height: 123px;

  font-size: 130px;
  line-height: 130%;

  color: ${props => props.theme.colors.blue};

  @media ${selectTablet} {
    // font-size: 380px;
    // margin: 0 32px 70px 32px;
    // width: 704px;
    // height: 308px;

    font-weight: 800;
    font-size: 130px;
    line-height: 130%;
  }

  @media ${selectDesktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 130px;
    line-height: 130%;
  }
`;

export const DigitRight = styled.p`
  transform: rotate(-11.34deg);

  @media ${selectTablet} {
  }

  @media ${selectDesktop} {
  }
`;
export const DigitLeft = styled.p`
  transform: rotate(24.23deg);
  @media ${selectTablet} {
  }

  @media ${selectDesktop} {
  }
`;

export const Catbcg = styled.div`
  width: 220px;
  height: 220px;
  position: relative;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 50%;

  @media ${selectTablet} {
    width: 280px;
    height: 280px;
  }

  @media ${selectDesktop} {
    width: 131px;
    height: 131px;
  }
`;

export const CatImg = styled.img`
  position: absolute;
  top: 20px;
  left: 28px;
  width: 99.465px;
  height: 131.484px;
  flex-shrink: 0;
  border-bottom-right-radius: 86px;
  border-bottom-left-radius: 86px;
  box-sizing: border-box;

  @media ${selectTablet} {
    width: 280px;
    height: 330px;
    top: 36px;
    left: 40px;
    border-bottom-right-radius: 48%;
    border-bottom-left-radius: 102px;
  }

  @media ${selectDesktop} {
    position: absolute;
    width: 105px;
    height: 115px;
    top: 17px;
    left: 15px;
    border-bottom-right-radius: 46px;
    border-bottom-left-radius: 46px;
  }
`;
