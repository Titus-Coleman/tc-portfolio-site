import styles from '../styles/Contact.module.css';
import React, { useEffect, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  //Allows ESC key to close the modal
  const escKeyClose = useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return (): void => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [open]);

  if (!open) return null;

  return (
    <>
      <div>
        <div className={styles.Modal}>
          {/* <button onClick={onClose}>Close</button> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
