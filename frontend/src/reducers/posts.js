import { 
    GET_POSTS,
    SET_ORDER_POSTS,
    GET_CATEGORY_POSTS,
    GET_POST
} from '../actions/types';

const initialState = { 
  posts: [], 
  orderBy: '-voteScore',
  post: {}
};

const posts = (state = initialState, action) => {
    switch(action.type) {
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
        case GET_POST:
            return {
              post: action.post
            };
        default:
            return state;
    }
};

export default posts;