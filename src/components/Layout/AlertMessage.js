import { Alert } from 'react-bootstrap';

const AlertMessage = ({ alert: { show, success, message } }) => {
  return (
    <div className='d-flex justify-content-center'>
      <Alert
        show={show}
        variant={success ? 'success' : 'danger'}
        className='p-1'
        style={{ fontWeight: 'bolder', display: 'inline-flex' }}
      >
        <p>{message}</p>
      </Alert>
    </div>
  );
};

export default AlertMessage;
