import { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import postReducer from './reducers/post';
import {
  apiUrl,
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './constant';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentUpdateCourse, setCurrentUpdateCourse] = useState({
    title: '',
    description: '',
    url: '',
    status: '',
  });
  const [showToast, setShowToast] = useState({
    show: false,
    success: null,
    message: '',
  });

  const initialPostState = {
    posts: [],
    isLoadingPost: true,
  };

  const [postState, dispatch] = useReducer(postReducer, initialPostState);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/posts`);

      if (data.success) {
        dispatch({ type: GET_POSTS, payload: data.posts });
      }

      const { success, message } = data;
      return { success, message };
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  useEffect(() => getPosts(), []);

  const addPost = async post => {
    try {
      const { data } = await axios.post(`${apiUrl}/posts`, post);

      if (data.success) {
        dispatch({ type: ADD_POST, payload: data.post });
      }

      const { success, message } = data;
      return { success, message };
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  const updatePost = async (id, post) => {
    try {
      const { data } = await axios.put(`${apiUrl}/posts/${id}`, post);

      if (data.success) {
        dispatch({ type: EDIT_POST, payload: post });
      }

      const { success, message } = data;
      return { success, message };
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  const deletePost = async id => {
    try {
      const { data } = await axios.delete(`${apiUrl}/posts/${id}`);

      if (data.success) {
        dispatch({ type: DELETE_POST, payload: id });
      }

      const { success, message } = data;
      return { success, message };
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  };

  const postData = {
    postState,
    getPosts,
    addPost,
    updatePost,
    deletePost,
    showAddModal,
    setShowAddModal,
    showUpdateModal,
    setShowUpdateModal,
    currentUpdateCourse,
    setCurrentUpdateCourse,
    showToast,
    setShowToast,
  };

  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
};

export default PostContextProvider;
