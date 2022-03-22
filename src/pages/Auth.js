import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { AuthContext } from '../contexts/auth-context';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

const Auth = ({ auth }) => {
  const {
    authState: { isAuthenticated, isLoading },
  } = useContext(AuthContext);

  let form;
  if (auth === 'register') form = <RegisterForm />;
  else if (auth === 'login') form = <LoginForm />;

  if (isLoading) {
    form = (
      <div className='spinner'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  } else if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className='auth'>
      <div className='title'>
        <h1>LearnIt</h1>
        <h3>Keep track of what you are learning</h3>
      </div>
      <div className='auth-form'>{form}</div>
    </div>
  );
};

export default Auth;
