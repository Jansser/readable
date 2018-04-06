import * as API from '../utils/api';
import { 
  GET_POSTS,
  GET_CATEGORY_POSTS, 
  SET_ORDER_POSTS,
  GET_POST 
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

export const fetchPostsByCategory = (category) => (dispatch) => 
  API.fetchPostsByCategory(category).then(data => {
    dispatch(getCategoryPosts(data))
  }
);