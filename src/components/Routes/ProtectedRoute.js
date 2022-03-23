import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import PostContextProvider from '../../contexts/post-context';
import { AuthContext } from '../../contexts/auth-context';
import NavbarMenu from '../Layout/NavbarMenu';

const ProtectedRoute = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  if (!isAuthenticated) return <Navigate to='/login' />;

  return (
    <PostContextProvider>
      <NavbarMenu />
      <Outlet />
    </PostContextProvider>
  );
};

export default ProtectedRoute;
