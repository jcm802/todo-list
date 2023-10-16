import React from 'react'

interface ModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export default function Modal({ openModal, setOpenModal, children }: ModalProps): JSX.Element {
  return (
    <dialog className={`modal ${openModal ? "modal-open" : ""}`}>
    <div className="modal-box">
        <form method="dialog">
        <button
            onClick={() => setOpenModal(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
        </button>
        </form>
        {children}
    </div>
    </dialog>
  )
}
