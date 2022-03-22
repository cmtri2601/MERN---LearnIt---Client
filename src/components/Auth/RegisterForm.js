import { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { AuthContext } from '../../contexts/auth-context';
import AlertMessage from '../Layout/AlertMessage';

const RegiserForm = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [alert, setAlert] = useState({
    show: false,
    success: true,
    message: '',
  });

  const checkboxRef = useRef(null);

  const { username, password, confirmPassword } = registerForm;

  const changeRegisterHandler = event => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const submitRegisterForm = async event => {
    event.preventDefault();

    if (!checkboxRef.current.checked) {
      setAlert({ show: true, success: false, message: 'You are a robot?' });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        show: true,
        success: false,
        message: "Passwords don't match",
      });
      return;
    }

    const registerData = await registerUser({ username, password });

    if (!registerData.success) {
      setAlert({ show: true, success: false, message: registerData.message });
      return;
    } else if (registerData.success) {
      navigate('/login');
    }
  };

  return (
    <Form className='mt-4' onSubmit={submitRegisterForm}>
      <AlertMessage alert={alert} />
      <Form.Group className='mb-1' controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Enter username'
          name='username'
          value={username}
          onChange={changeRegisterHandler}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-4' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={changeRegisterHandler}
          autoComplete=''
        />
      </Form.Group>

      <Form.Group className='mb-1' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={changeRegisterHandler}
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
          Register
        </Button>

        <p className='mt-3'>
          Don't have an account?
          <Button
            variant='info'
            className='ms-1 p-1'
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </p>
      </div>
    </Form>
  );
};

export default RegiserForm;
