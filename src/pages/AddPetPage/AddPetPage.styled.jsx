import styled from "styled-components";
import { selectDesktop, selectTablet } from "../../utils";

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 128px);
  // background-color: #FEF9F9;
  margin-top: 20px;
  padding: 0 20px;
`;

export const FormBody = styled.div`
  width: 100%;
  height: 80%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${selectTablet} {
    padding: 20px 32px;
    height: 90%;
  }

  @media ${selectDesktop} {
    max-width: 500px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: calc(24/20);
  margin-left: 12px;
  margin-bottom: 24px;

  @media ${selectTablet} {
    margin-left: 0px;
  }
`;
