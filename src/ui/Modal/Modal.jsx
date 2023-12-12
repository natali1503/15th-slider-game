import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button";
import "./modal.css";
function Modal({ header, content, onClick }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={onClick}></div>
      <div className="modal-window">
        <div className="modal-header">
          <h3>{header}</h3>
          <Button onClick={onClick} className="btn">
            <IoCloseSharp />
          </Button>
        </div>
        <div className="modal-content"> {content}</div>
      </div>
    </div>
  );
}

export default Modal;
