import './Popup.css';
import { Modal } from '@mui/material';

function Popup(props) {
  return (
    <Modal {...props} className="popup">
      <div className="popup__container">{props.children}</div>
    </Modal>
  );
}

export default Popup;
