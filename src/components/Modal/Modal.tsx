import { useEffect } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { type ModalProps } from "./modal.types";
import style from "./modal.module.scss";

export const Modal = (props: ModalProps) => {
  const { open, children, onClickOutside } = props;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return ReactDOM.createPortal(
    <>
      <div className={clsx(style.modal, { [style.open]: open })}>
        {children}
      </div>
      <div
        className={clsx(style.backdrop, { [style.show_backdrop]: open })}
        onClick={onClickOutside}
      ></div>
    </>,
    document.body
  );
};
