import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import postReducer from './reducers/post';
import { apiUrl, GET_POSTS } from './constant';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const initialPostState = {
    posts: [],
    isLoadingPost: true,
  };

  const [postState, dispatch] = useReducer(postReducer, initialPostState);

  const getPosts = async () => {
    try {
      const {
        data: { success, message, posts },
      } = await axios.get(`${apiUrl}/posts`);

      if (success) {
        dispatch({ type: GET_POSTS, payload: posts });
      }
      return { success, message };
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  useEffect(() => getPosts(), []);

  const addPost = async post => {};

  const postData = { postState, getPosts, addPost };

  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
};

export default PostContextProvider;
