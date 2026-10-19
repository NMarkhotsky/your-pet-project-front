import { css, keyframes } from 'styled-components';
export const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
export const riseIn = keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`;
export const cardMotion = css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${riseIn} 420ms cubic-bezier(.22, 1, .36, 1) both;
    animation-fill-mode: backwards;
    &:nth-child(3n + 2) { animation-delay: 50ms; }
    &:nth-child(3n) { animation-delay: 100ms; }
    transition: transform 220ms ease, box-shadow 220ms ease;
    &:hover { transform: translateY(-4px); }
  }
`;
