import { GET_POSTS, ADD_POST } from '../constant';

const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        isLoadingPost: false,
      };

    case ADD_POST:
      return {
        ...state,
      };

    default:
      break;
  }
};

export default postReducer;
