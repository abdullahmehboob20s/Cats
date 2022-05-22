import React from "react";
import styles from "scss/components/Modal.module.scss";
import { ReactComponent as CrossIcon } from "assets/icons/crossIconCircle.svg";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Modal({ children, img, shouldShow, setModalState }) {
  const modalRef = OutsideClickDetector(() => {
    setModalState(false);
  });

  return (
    <>
      {/* BLACK SCREEN */}
      <div className={`black-screen ${shouldShow ? "show" : ""}`}></div>

      {/* MODAL */}
      <div
        className={`${styles.modal} ${shouldShow ? styles.show : ""}`}
        ref={modalRef}
      >
        <button
          className={`${styles.crossIcon}`}
          onClick={() => setModalState(false)}
        >
          <CrossIcon />
        </button>

        <img src={img} alt="" />
        {children}
      </div>
    </>
  );
}

export default Modal;
