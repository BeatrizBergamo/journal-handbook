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
  const asideRef = React.useRef<HTMLDialogElement>(null);
  const normalRef = React.useRef<HTMLDialogElement>(null);

  useClickOutsideToClose(show ? asideRef ?? normalRef : { current: {} }, handleClose);

  function handleClose() {
    onClose(false);
  }

  return (
    <>
      {show &&
        createPortal(
          <ModalBgWrapper>
            {type === "aside" ? (
              <AsideModalWrapper ref={asideRef} show={show}>
                <ModalCloseButton onClick={handleClose} />
                {children}
              </AsideModalWrapper>
            ) : (
              <ModalWrapper ref={normalRef} show={show}>
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
