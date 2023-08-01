import{s as t}from"./index-91850c61.js";const r=t.button`
  position: relative;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 248px;
  height: 40px;
  padding: 8px 28px 8px 28px;
  letter-spacing: 0.64px;
  border-radius: 40px;
  outline: transparent;

  color: ${e=>e.theme.colors.blue};
  font-family: ${e=>e.theme.fonts.main.bold};
  border: 2px solid ${e=>e.theme.colors.blue};
  font-size: ${e=>e.theme.fontSizes.md};
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.white};
    border: transparent;
    background: ${e=>e.theme.colors.blueGradient};
    transition: all ${e=>e.theme.transitionHover};
  }

  &:hover svg use,
  &:focus svg use {
    fill: ${e=>e.theme.colors.white};
    transition: ${e=>e.theme.transitionHover};
  }
`;export{r as B};
