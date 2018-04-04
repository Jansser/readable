import { 
    GET_POSTS,
    SET_ORDER_POSTS
} from '../actions/types';

const posts = (state = { posts: [], orderBy: '-voteScore' }, action) => {
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
        default:
            return state;
    }
};

export default posts;