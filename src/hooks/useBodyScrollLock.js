import { useEffect } from 'react';
let locks = 0;
let originalOverflow;
export const useBodyScrollLock = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    if (locks++ === 0) { originalOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
    return () => { if (--locks === 0) document.body.style.overflow = originalOverflow; };
  }, [enabled]);
};
