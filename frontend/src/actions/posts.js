import * as API from '../utils/api';
import { 
  GET_POSTS,
  GET_CATEGORY_POSTS, 
  SET_ORDER_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_ON_POST
} from './types';

export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts: posts
    };
}

export const getPost = (post) => {
  return {
    type: GET_POST,
    post: post
  };
}

export const createPostSuccess = (data) => {
  return {
      type: CREATE_POST,
      payload: data
  };
}

export const editPostSuccess = (data) => {
  return {
      type: EDIT_POST,
      payload: data
  };
}

export const deletePostSuccess = (data) => {
  return {
      type: DELETE_POST,
      payload: data
  };
}

export const voteOnPostSuccess = (data) => {
  return {
    type: VOTE_ON_POST,
    payload: data
  };
};

export const getCategoryPosts = (posts) => {
  return {
    type: GET_CATEGORY_POSTS,
    posts: posts
  };
}

export const fetchPost = (id) => (dispatch) => 
  API.fetchPost(id).then(data => {
    dispatch(getPost(data))
  }
);

export const setOrderPosts = (orderBy) => {
    return {
        type: SET_ORDER_POSTS,
        orderBy: orderBy
    }
}

export const fetchPosts = () => (dispatch) =>
    API.fetchPosts().then(data => {
        dispatch(getPosts(data))
    }
);

export const createPost = (data, callback) => (dispatch) =>
  API.createPost(data).then(data => {
    callback();
    dispatch(createPostSuccess(data))
  }
);

export const editPost = (id, data, callback) => (dispatch) =>
  API.editPost(id, data).then(data => {
    callback();
    dispatch(editPostSuccess(data))
  }
);

export const deletePost = (id, callback) => (dispatch) =>
  API.deletePost(id).then(data => {
    callback();
    dispatch(deletePostSuccess(data))
  }
);

export const voteOnPost = (id, voteOption) => (dispatch) =>
  API.voteOnPost(id, voteOption).then(data => {
    dispatch(voteOnPostSuccess(data))
  }
);

export const fetchPostsByCategory = (category) => (dispatch) => 
  API.fetchPostsByCategory(category).then(data => {
    dispatch(getCategoryPosts(data))
  }
);