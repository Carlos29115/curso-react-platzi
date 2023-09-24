import { createPortal } from "react-dom";
import "./modal.css";
const Modal = ({ children }) => {
  return createPortal(children, document.getElementById("modal"));
};

export default Modal;
