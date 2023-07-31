import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';
export const FormSellMoreInfo = styled.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${selectTablet} {
    height: calc(100% - 160px);
    max-width: 702px;
    gap: 60px;
  }

  @media ${selectDesktop} {
    height: calc(100% - 140px);
    max-width: 822px;
    gap: 64px;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`;

export const Container = styled.div`
  @media ${selectTablet} {
    display: flex;
    align-items: baseline;
    gap: 44px;
  }

  @media ${selectDesktop} {
    gap: 78px;
  }
`;

export const RadioContainer = styled.div`
  @media ${selectTablet} {
  }

  @media ${selectDesktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${selectTablet} {
    width: 100%;

    gap: 24px;

    & textarea {
      height: 108px;
    }

    & label {
      gap: 8px;
    }
  }

  @media ${selectDesktop} {
  }
`;

export const SexContainer = styled.div`
  margin-bottom: 40px;
`;

export const SexText = styled.p`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

// import styled from 'styled-components';
// import { selectTablet, selectDesktop } from '../../utils';
// export const FormSellMoreInfo = styled.form`
//   height: calc(100% - 120px);
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   margin-top: 16px;
//   @media ${selectTablet} {
//     height: calc(100% - 160px);
//     width: 702px;
//   }

//   @media ${selectDesktop} {
//     height: calc(100% - 140px);
//     width: 822px;
//   }
// `;

// export const RadioWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: start;
//   position: relative;
// `;

// export const Container = styled.div`
//   @media ${selectTablet} {
//     display: flex;
//     align-items: baseline;
//     gap: 44px;
//   }

//   @media ${selectDesktop} {
//     gap: 78px;
//   }
// `;

// export const FieldContainer = styled.div`
//   @media ${selectTablet} {
//     width: 100%;

//     display: flex;
//     flex-direction: column;
//     gap: 24px;

//     & textarea {
//       height: 182px;
//     }

//     & label {
//       gap: 8px;
//     }
//   }

//   @media ${selectDesktop} {
//   }
// `;

// export const SexContainer = styled.div`
//   margin-bottom: 40px;
// `;

// export const SexText = styled.p`
//   margin-bottom: 8px;

//   font-family: ${({ theme }) => theme.fonts.main.medium};
//   font-size: ${({ theme }) => theme.fontSizes.lg};
// `;
