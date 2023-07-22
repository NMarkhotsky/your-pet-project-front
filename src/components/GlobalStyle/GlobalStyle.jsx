import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import ManropeRegular from '../../assets/fonts/manrope/Manrope-Regular.woff';
import ManropeMedium from '../../assets/fonts/manrope/Manrope-Medium.woff';
import ManropeSemiBold from '../../assets/fonts/manrope/Manrope-SemiBold.woff';
import ManropeBold from '../../assets/fonts/manrope/Manrope-Bold.woff';
import ManropeExtraBold from '../../assets/fonts/manrope/Manrope-ExtraBold.woff';
import InterRegular from '../../assets/fonts/inter/Inter-Regular.woff';
import InterMedium from '../../assets/fonts/inter/Inter-Medium.woff';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Manrope-Regular';
  src: url(${ManropeRegular}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Manrope-Medium';
  src: url(${ManropeMedium}) format('woff');
  font-weight: 500;
}

@font-face {
  font-family: 'Manrope-SemiBold';
  src: url(${ManropeSemiBold}) format('woff');
  font-weight: 600;
}

@font-face {
  font-family: 'Manrope-Bold';
  src: url(${ManropeBold}) format('woff');
  font-weight: 700;
}

@font-face {
  font-family: 'Manrope-ExtraBold';
  src: url(${ManropeExtraBold}) format('woff');
  font-weight: 800;
}

@font-face {
  font-family: 'Inter-Regular';
  src: url(${InterRegular}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Inter-Medium';
  src: url(${InterMedium}) format('woff');
  font-weight: 500;
}


body {
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;

  background-color: ${({ theme }) => theme.colors.bgdColor};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;
