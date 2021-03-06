import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Error from './pages/Error';
import AuthContextProvider from './contexts/auth-context';
import ProtectedRoute from './components/Routes/ProtectedRoute';

import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/register' element={<Auth auth='register' />} />
          <Route path='/login' element={<Auth auth='login' />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
