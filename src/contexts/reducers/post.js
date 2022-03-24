import { GET_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from '../constant';

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
        posts: [...state.posts, payload],
      };

    case EDIT_POST:
      return {
        ...state,
        posts: [
          ...state.posts.map(post =>
            post._id === payload._id ? payload : post
          ),
        ],
      };

    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(post => post._id !== payload)],
      };

    default:
      break;
  }
};

export default postReducer;
