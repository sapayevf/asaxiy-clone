import "./modal.scss"

const ModalWrapper = ({ children, onClose }) => {
  return (
    <>
      <div onClick={onClose} className="modal-overlay"></div>
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        {children}
      </div>
    </>
  );
};

export default ModalWrapper;
 