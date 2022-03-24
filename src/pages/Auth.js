import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner, Toast } from 'react-bootstrap';

import { AuthContext } from '../contexts/auth-context';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

const Auth = ({ auth }) => {
  const {
    authState: { isAuthenticated, isLoading },
    showToast,
    setShowToast,
  } = useContext(AuthContext);

  let form;

  if (isLoading)
    form = (
      <div className='spinner'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  else if (isAuthenticated) return <Navigate to='/dashboard' />;
  else if (auth === 'register') form = <RegisterForm />;
  else if (auth === 'login') form = <LoginForm />;

  const toast = (
    <Toast
      className={`bg-${showToast.success ? 'success' : 'danger'} text-white`}
      style={{ position: 'fixed', top: '10%', right: '10px', width: '20%' }}
      onClose={() => setShowToast({ show: false, success: null, message: '' })}
      show={showToast.show}
      delay={3000}
      autohide
    >
      <Toast.Body>{showToast.message}</Toast.Body>
    </Toast>
  );

  return (
    <div className='auth'>
      <div className='title'>
        <h1>LearnIt</h1>
        <h3>Keep track of what you are learning</h3>
      </div>
      <div className='auth-form'>{form}</div>
      {toast}
    </div>
  );
};

export default Auth;
