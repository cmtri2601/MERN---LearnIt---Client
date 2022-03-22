import { useState } from 'react';
import { Toast } from 'react-bootstrap';

const NoticeToast = ({ success, message }) => {
  const [show, setShow] = useState(true);

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default NoticeToast;
