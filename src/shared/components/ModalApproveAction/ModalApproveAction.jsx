import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Icon } from '../../../components/Icon/Icon';
import { Backdrop, Modal, CloseBtn } from './ModalAprroveAction.styled';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
const stack = [];
export const ModalApproveAction = ({ children, onClose }) => {
  const ref = useRef(null);
  useBodyScrollLock();
  useEffect(() => {
    const modal = ref.current;
    const previousFocus = document.activeElement;
    stack.push(modal);
    modal.focus();
    const handleKey = event => {
      if (stack.at(-1) !== modal) return;
      if (event.key === 'Escape') { event.stopPropagation(); onClose(); }
      if (event.key === 'Tab') {
        const elements = Array.from(modal.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled), [tabindex="0"]'))
          .filter(element => element.getClientRects().length);
        const first = elements[0];
        const last = elements.at(-1);
        if (!first) { event.preventDefault(); modal.focus(); }
        else if (event.shiftKey && (document.activeElement === first || document.activeElement === modal)) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || document.activeElement === modal)) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      stack.splice(stack.indexOf(modal), 1);
      window.removeEventListener('keydown', handleKey);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [onClose]);
  return createPortal(
    <Backdrop onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <Modal ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Your Pet">
        <CloseBtn type="button" onClick={onClose} aria-label="close">
          <Icon iconName="icon-cross-small" width="24px" height="24px" stroke="#54ADFF" />
        </CloseBtn>
        {children}
      </Modal>
    </Backdrop>, document.querySelector('#modal-root')
  );
};
ModalApproveAction.propTypes = { onClose: PropTypes.func.isRequired, children: PropTypes.element.isRequired };
