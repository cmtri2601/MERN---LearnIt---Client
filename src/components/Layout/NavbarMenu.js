import { useContext } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';

import logo from '../../assets/logo.svg';
import logoutIcon from '../../assets/logout.svg';

const NavbarMenu = () => {
  const navigate = useNavigate();

  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <Navbar bg='primary' variant='dark' expand='lg' className='p-2'>
      <Container style={{ fontWeight: 'bolder' }}>
        <Navbar.Brand
          to='/dashboard'
          as={NavLink}
          style={{ fontWeight: 'bolder', fontSize: '25px' }}
        >
          <img
            alt='Logo'
            src={logo}
            width='40'
            height='40'
            className='d-inline-block align-top'
          />{' '}
          LearntIt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link to='/dashboard' as={NavLink}>
              Dashboard
            </Nav.Link>
            <Nav.Link to='/about' as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Navbar.Text>Hi {username}</Navbar.Text>
            <Button onClick={logout} variant='secondary' className='ms-2'>
              <img
                alt='Logout Icon'
                src={logoutIcon}
                width='25'
                height='25'
                className='d-inline-block align-top'
              />{' '}
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
