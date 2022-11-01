import ReactDOM from "react-dom";

export default function ModalPortal({ children }) {
  const element = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, element);
}
