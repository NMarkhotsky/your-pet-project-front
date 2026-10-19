import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: ${({ theme }) => theme.fonts.main.regular}, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;

  background-color: ${({ theme }) => theme.colors.bgdColor};
  color: ${({ theme }) => theme.colors.text};

  transition: ${({ theme }) => theme.transitionHover};
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
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input, textarea {
  outline: transparent;
}

html { scroll-behavior: smooth; }
button, a, input, textarea { -webkit-tap-highlight-color: transparent; }
button:disabled { cursor: wait; opacity: .65; }
:focus-visible { outline: 3px solid #54adff; outline-offset: 4px; }
@media (prefers-reduced-motion: no-preference) {
  button, a { transition: color 180ms ease, background-color 180ms ease, opacity 180ms ease; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
