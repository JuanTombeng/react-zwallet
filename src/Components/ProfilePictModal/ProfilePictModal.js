import Button from '../../Components/Button/index'
import './profilePictModal.css';

const ProfilePictModal = ({ handleClose, show, children, handleClick, parentCallback }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const onTrigger = (e) => {
    e.preventDefault()
    parentCallback(e.target.files[0])
}
  return (
    <div className={showHideClassName}>
      <section className="modal-main-profile">
        <div className="header-modal">
          <div className="header-modal-left">
            <h2 className="modal-title-profile">
              Upload Profile Picture
            </h2>
            <p className="modal-subtitle-profile">
              Picture can be only .png, .jpg and .jpeg format allowed
            </p>
          </div>
          <div className="header-modal-right">
            <i className="modal-icon fas fa-times" onClick={handleClose}></i>
          </div>
        </div>
        <div className="wrapper-modal d-flex flex-column">
          {children}
            <div className="upload d-flex mt-3">
                <input className='profile-pict-input' type="file" onChange={onTrigger} />
            </div>
        </div>
        <div className="footer-modal">
          <Button className='form-button white d-flex align-items-center justify-content-center w-25' 
              onClick={handleClick}
              >Confirm
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePictModal