import React from "react";
import { createPortal } from "react-dom";
import { AsideModalWrapper, ModalBgWrapper, ModalCloseButton, ModalWrapper } from "./modal.component.styled";
import { useClickOutsideToClose } from "hook";

interface ModalProps {
  type: "aside" | "normal";
  show: boolean;
  onClose(show: false): void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ type, show, onClose, children }) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  useClickOutsideToClose(dialogRef, handleClose);

  function handleClose() {
    onClose(false);
  }

  return (
    <>
      {show &&
        createPortal(
          <ModalBgWrapper>
            {type === "aside" ? (
              <AsideModalWrapper ref={dialogRef} show={show}>
                <ModalCloseButton onClick={handleClose} />
                {children}
              </AsideModalWrapper>
            ) : (
              <ModalWrapper ref={dialogRef} show={show}>
                <ModalCloseButton onClick={handleClose} />
                {children}
              </ModalWrapper>
            )}
          </ModalBgWrapper>,
          document.getElementById("modal")!
        )}
    </>
  );
};
