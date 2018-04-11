import {
  GET_POSTS,
  SET_ORDER_POSTS,
  GET_CATEGORY_POSTS,
  DELETE_POST,
  GET_POST,
  VOTE_ON_POST
} from '../actions/types';

const initialState = {
  posts: [],
  orderBy: '-voteScore',
  post: {}
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case SET_ORDER_POSTS:
      return {
        ...state,
        orderBy: action.orderBy
      };
    case GET_CATEGORY_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id),
        post: action.payload
      };
    case GET_POST:
      return {
        ...state,
        post: action.post
      };
    case VOTE_ON_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),
        post: action.payload
      }
    default:
      return state;
  }
};

export default posts;