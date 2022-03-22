import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';
import NavbarMenu from '../Layout/NavbarMenu';

const ProtectedRoute = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  if (!isAuthenticated) return <Navigate to='/login' />;

  return (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
