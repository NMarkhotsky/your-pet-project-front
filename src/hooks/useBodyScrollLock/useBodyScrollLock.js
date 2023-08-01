const useLockBodyScroll = shouldLock => {
  document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
};

export default useLockBodyScroll;
