import Button from '../../Components/Button/index'
import './modal.css';

const Modal = ({ handleClose, show, children, handleClick, isLoading }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="header-modal">
          <div className="header-modal-left">
            <h2 className="modal-title">
              Enter PIN to Transfer
            </h2>
            <p className="modal-subtitle">
              Enter your 6 digits PIN for confirmation to continue transferring money. 
            </p>
          </div>
          <div className="header-modal-right">
            <i className="modal-icon fas fa-times" onClick={handleClose}></i>
          </div>
        </div>
        <div className="wrapper-modal">
          {children}
        </div>
        <div className="footer-modal">
          <Button className='form-button white d-flex align-items-center justify-content-center w-25' 
              onClick={handleClick} isLoading={isLoading}
              >Confirm
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Modal