import { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { AuthContext } from '../../contexts/auth-context';
import AlertMessage from '../Layout/AlertMessage';

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [alert, setAlert] = useState({
    show: false,
    success: true,
    message: '',
  });

  const checkboxRef = useRef(null);

  const { username, password } = loginForm;

  const changeLoginHandler = event => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const submitLoginForm = async event => {
    event.preventDefault();

    if (!checkboxRef.current.checked) {
      setAlert({ show: true, success: false, message: 'You are a robot?' });
      return;
    }

    const loginData = await loginUser(loginForm);
    if (!loginData.success) {
      setAlert({ show: true, success: false, message: loginData.message });
      return;
    }
  };

  return (
    <Form className='mt-4' onSubmit={submitLoginForm}>
      <AlertMessage alert={alert} />
      <Form.Group className='mb-1' controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Enter username'
          name='username'
          value={username}
          onChange={changeLoginHandler}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-1' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={changeLoginHandler}
          autoComplete=''
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check
          type='checkbox'
          label="You aren't a  robot?"
          ref={checkboxRef}
        />
      </Form.Group>
      <div className='text-center'>
        <Button variant='success' type='submit' className='px-4'>
          Login
        </Button>

        <p className='mt-3'>
          Don't have an account?
          <Button
            variant='info'
            className='ms-1 p-1'
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;
