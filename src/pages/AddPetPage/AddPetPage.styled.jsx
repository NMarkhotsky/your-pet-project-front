import styled from "styled-components";
import { selectDesktop, selectPhone, selectTablet } from "../../utils";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #FEF9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const FormBody = styled.div`
  width: 100%;
  height: 80%;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 17px 8px;

  @media ${selectPhone} {
    
  }

  @media ${selectTablet} {
    width: 60%;
    padding: 20px 32px;
  }

  @media ${selectDesktop} {
    width: 100%;
    max-width: 458px;
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
