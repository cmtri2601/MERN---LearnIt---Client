import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import authReducer from './reducers/auth';
import addToken from '../utils/addToken';

import { apiUrl, LOAD_USER_SUCCESS, LOAD_USER_FAILED } from './constant';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const initialAuthState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const loadUser = async () => {
    const token = localStorage.getItem('token') || '';

    if (!token) {
      dispatch({ type: LOAD_USER_FAILED });
    }

    try {
      addToken(token);
      const response = await axios.get(`${apiUrl}/auth`);

      if (!response.data.success) {
        dispatch({ type: LOAD_USER_FAILED });
      } else {
        dispatch({ type: LOAD_USER_SUCCESS, payload: response.data.user });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = async user => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, user);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        await loadUser();
      }

      return response.data;
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  const registerUser = async user => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, user);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const authData = {
    authState,
    loginUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
