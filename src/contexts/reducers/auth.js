import { LOAD_USER_SUCCESS, LOAD_USER_FAILED } from '../constant';

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      };
    case LOAD_USER_FAILED:
      return {
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
