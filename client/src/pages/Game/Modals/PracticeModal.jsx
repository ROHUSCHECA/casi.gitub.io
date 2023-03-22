import useAppContext from "../../../context/appContext";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserImage from "../../common/UserImage/UserImage";

const PracticeModal = ({ show, setShow }) => {
  const { user } = useAppContext();

  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const redirect = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="practice-modal">
      <Modal.Header>
        <div className="modal-head-img">
          <img src="/assets/img/game_modes/practice.png" alt="" />
        </div>

        <Modal.Title>Battle Test</Modal.Title>

        <div className="btn-close" aria-label="Close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className="box practice">
          <UserImage name="modal-img" user={user} pic={user?.profilepic?.key} />

          <p>Practice is about to begin. </p>
        </div>

        <div className="btn-container">
          <Button className="sub-btn" onClick={handleClose}>
            Back to Lobby
          </Button>
          <Button className="main-btn" onClick={redirect}>
            Start Game
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PracticeModal;