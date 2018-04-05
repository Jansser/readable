import * as API from '../utils/api';
import { 
  GET_POSTS,
  GET_CATEGORY_POSTS, 
  SET_ORDER_POSTS 
} from './types';

export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts: posts
    };
}

export const getCategoryPosts = (posts) => {
  return {
    type: GET_CATEGORY_POSTS,
    posts: posts
  };
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

export const setOrderPosts = (orderBy) => {
    return {
        type: SET_ORDER_POSTS,
        orderBy: orderBy
    }
}
