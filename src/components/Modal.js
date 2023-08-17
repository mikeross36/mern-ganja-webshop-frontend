import { createPortal } from "react-dom";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ children, showModal, setShowModal }) => {
  if (!showModal) {
    return null;
  }
  return createPortal(
    <main className="modal__overlay">
      <div className="modal__container">
        <div className="modal__close" onClick={() => setShowModal(false)}>
          <FaWindowClose size={35} color="#333" />
        </div>
        {children}
      </div>
    </main>,
    document.getElementById("modal")
  );
};

export default Modal;
